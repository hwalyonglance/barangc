import { MdPaginator, MdSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import { ItemDatabase } from './barang.database';
import { Item } from '../../Interfaces/item';

export class ItemDataSource extends DataSource<Item> {
	_filterChange = new BehaviorSubject('');
	get filter(): string {return this._filterChange.value}
	set filter(filter: string) { this._filterChange.next(filter) }
	constructor(
		private _itemDatabase: ItemDatabase,
		private __paginator: MdPaginator,
		private __sort: MdSort
	) {
		super()
	}
	connect() {
		const displayDataChanges = [
			this._itemDatabase.dataChange,
			this.__paginator.page,
			this.__sort.mdSortChange,
			this._filterChange
		];
		return Observable.merge(...displayDataChanges).map(() => {
			const startIndex = this.__paginator.pageIndex * this.__paginator.pageSize;
			return this.getSortedData()
				.filter((Item: Item) => {
					const searchStr = [
						Item.Category.type,
						Item.name,
						Item.price,
						Item.stock,
						Item.desc
					].join('').toLocaleLowerCase();
					return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
				}).splice(startIndex, this.__paginator.pageSize);
		})
	}
	disconnect() {}
	getSortedData() {
		const copiedData = this._itemDatabase.data.slice();
		if (!this.__sort.active || this.__sort.direction === '') { return copiedData }
		return copiedData.sort((a: Item, b: Item) => {
			let propertyA: number | string = '';
			let propertyB: number | string = '';
			switch (this.__sort.active) {
				case '_id': [propertyA, propertyB] = [a._id, b._id]; break;
				case 'Type': [propertyA, propertyB] = [a.Category.type, b.Category.type]; break;
				case 'Image': [propertyA, propertyB] = [a.image, b.image]; break;
				case 'Name': [propertyA, propertyB] = [a.name, b.name]; break;
				case 'Price': [propertyA, propertyB] = [a.price, b.price]; break;
				case 'Stock': [propertyA, propertyB] = [a.stock, b.stock]; break;
				case 'Description': [propertyA, propertyB] = [a.desc, b.desc]; break;
			}
			const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
			const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
			return (valueA < valueB ? -1 : 1) * (this.__sort.direction === 'asc' ? 1 : -1);
		})
	}
}
