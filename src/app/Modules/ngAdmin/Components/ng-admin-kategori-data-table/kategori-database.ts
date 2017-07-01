// import { Injectable } from '@angular/core';
// import { FormGroup } from '@angular/forms';
// import { CollectionViewer, DataSource, MdPaginator, MdSort } from '@angular/material';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// type UserProperties = 'UUID' | 'categoryName' | 'createdAt' | undefined;
// type TrackByStrategy = 'id' | 'reference' | 'index';

// export interface CategoryData {
// 	UUID: string;
// 	categoryName: string;
// 	createdAt: string;
// };
// @Injectable()
// export class KategoriDatabase {
// 	dataChange: BehaviorSubject<CategoryData[]> = new BehaviorSubject<CategoryData[]>([]);
// 	get data(): CategoryData[] { return this.dataChange.value; }
// 	constructor() { this.initialize() }
// 	initialize() {
// 		let dataSource: CategoryData[] = [];
// 		try {
// 			dataSource = JSON.parse(String(window.localStorage.kategori));
// 		} catch (error) {
// 			dataSource = [];
// 		}
// 		this.dataChange.next(dataSource);
// 	}
// 	addCategory(Category: FormGroup) {
// 		const dataSource: CategoryData = {
// 			UUID: Category.get('UUID').value,
// 			categoryName: Category.get('categoryName').value,
// 			createdAt: Category.get('createdAt').value,
// 		};
// 		const copiedData = this.data.slice();
// 		copiedData.push(dataSource);
// 		this.dataChange.next(copiedData);
// 	}
// }
