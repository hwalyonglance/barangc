import {Component} from '@angular/core';
import { MdPaginator, MdSort } from '@angular/material';
import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import { CategoryDatabase } from './kategori-database';

import { Category } from '../../../../Interfaces/category';


export class CategoryDataSource extends DataSource<any> {
	constructor(
		private _categoryDatabase: CategoryDatabase,
		private __paginator: MdPaginator,
		private __sort: MdSort
	) {
		super();
	}
	/** Connect function called by the table to retrieve one stream containing the data to render. */
	connect(): Observable< Category[] > {
		const displayDataChanges = [
			this._categoryDatabase.dataChange,
			this.__paginator.page,
			this.__sort.mdSortChange
		];
		return Observable.merge(...displayDataChanges).map(() => {
			const data = this._categoryDatabase.data.slice();
			// Grab the page's slice of data.
			const startIndex = this.__paginator.pageIndex * this.__paginator.pageSize;
			return this.getSortedData().splice(startIndex, this.__paginator.pageSize);
		});
		// return this._categoryDatabase.dataChange;
	}
	disconnect() { }
	getSortedData(): Category[] {
		const copiedData = this._categoryDatabase.data.slice();
		if ( !this.__sort.active || this.__sort.direction === '' ) { return copiedData }
		return copiedData.sort((a: Category, b: Category) => {
			let propertyA: number | string = '';
			let propertyB: number | string = '';
			switch (this.__sort.active) {
				case '_id': [propertyA, propertyB] = [a._id, b._id]; break;
				case 'type': [propertyA, propertyB] = [a.type, b.type]; break;
			}
			const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
			const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
			return (valueA < valueB ? -1 : 1) * (this.__sort.direction === 'asc' ? 1 : -1);
		})
	}
}
