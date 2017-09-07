import { $Socket } from './ng-admin-barang-data-table.socketio';

import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Item } from '../../Interfaces/item';

export class ItemDatabase {
	dataChange: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);
	get data(): Item[] { return this.dataChange.value }

	constructor () {
		$Socket(this);
	}
	add(Item: Item) {
		const copiedData = this.data.slice();
		copiedData.unshift(Item);
		this.dataChange.next(copiedData);
	}
	update(Item: Item) {
		const copiedData = this.data.slice();
		Object.keys(copiedData).map(($key) => {
			if (Item._id === copiedData[$key]._id) {
				copiedData[$key] = Item;
			}
		});
		this.dataChange.next(copiedData);
	}
	delete(_id: string) {
		let copiedData = this.data.slice();
		copiedData = copiedData.filter((_Item: Item) => {
			return _id !== _Item._id;
		});
		this.dataChange.next(copiedData);
	}
}


