import {Component} from '@angular/core';
import { MdPaginator } from '@angular/material';
import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import { CategoryDatabase } from './kategori-database';

import { Category } from '../../../../Interfaces/category';


export class CategoryDataSource extends DataSource<any> {
	constructor(private _categoryDatabase: CategoryDatabase, private __paginator: MdPaginator) {
		super();
	}
	/** Connect function called by the table to retrieve one stream containing the data to render. */
	connect(): Observable< Category[] > {
		const displayDataChanges = [
			this._categoryDatabase.dataChange,
			this.__paginator.page
		];
		return Observable.merge(...displayDataChanges).map(() => {
			const data = this._categoryDatabase.data.slice();
			// Grab the page's slice of data.
			const startIndex = this.__paginator.pageIndex * this.__paginator.pageSize;
			return data.splice(startIndex, this.__paginator.pageSize);
		});
		// return this._categoryDatabase.dataChange;
	}
	disconnect() { }
}
