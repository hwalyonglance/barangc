import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import { Category } from '../../../../Interfaces/category';
import { $Socket } from './ng-admin-kategori-data-table.socketio';

/** An example database that the data source uses to retrieve data for the table. */
export class CategoryDatabase {
	/** Stream that emits whenever the data has been modified. */
	dataChange: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>([]);
	get data(): Category[] { return this.dataChange.value; }

	constructor() {
		$Socket(this);
	}
	addCategory(Category: Category) {
		const copiedData = this.data.slice();
		copiedData.unshift(Category);
		this.dataChange.next(copiedData);
	}
	updateCategory(Category: Category) {
		const copiedData = this.data.slice();
		Object.keys(copiedData).map(($key) => {
			if ( Category._id === copiedData[$key]._id ) {
				// Object.assign(copiedData[$key], {
				// 	type: Category.type
				// })
				copiedData[$key].type = Category.type;
			}
		});
		this.dataChange.next(copiedData);
	}
	deleteCategory(_id: string) {
		let copiedData = this.data.slice();
		copiedData = copiedData.filter((_Category: Category) => {
			return _id !== _Category._id;
		});
		this.dataChange.next(copiedData);
		// this.dataChange.next([]);
	}
}
