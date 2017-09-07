import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Category } from '../../Interfaces/category';
import { $Socket } from './ng-admin-kategori-data-table.socketio';

export class CategoryDatabase {
	dataChange: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>([]);
	get data(): Category[] { return this.dataChange.value; }

	constructor() {
		$Socket(this);
	}
	add(Category: Category) {
		const copiedData = this.data.slice();
		copiedData.unshift(Category);
		this.dataChange.next(copiedData);
	}
	update(Category: Category) {
		const copiedData = this.data.slice();
		Object.keys(copiedData).map(($key) => {
			if ( Category._id === copiedData[$key]._id ) {
				copiedData[$key] = Category;
			}
		});
		this.dataChange.next(copiedData);
	}
	delete(_id: string) {
		let copiedData = this.data.slice();
		copiedData = copiedData.filter((_Category: Category) => {
			return _id !== _Category._id;
		});
		this.dataChange.next(copiedData);
	}
}
