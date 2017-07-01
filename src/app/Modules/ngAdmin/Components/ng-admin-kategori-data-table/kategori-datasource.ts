// import { CollectionViewer, DataSource, MdPaginator, MdSort } from '@angular/material';
// import { Observable } from 'rxjs/Observable';
// import { KategoriDatabase, CategoryData } from './kategori-database';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import 'rxjs/add/observable/combineLatest';
// import 'rxjs/add/observable/merge';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/merge';
// import 'rxjs/add/observable/combineLatest';


// export class PersonDataSource extends DataSource<any> {
// 	/** Data that should be displayed by the table. */
// 	_displayData = new BehaviorSubject<CategoryData[]>([]);

// 	/** Cached data provided by the display data. */
// 	_renderedData: any[] = [];

// 	constructor(private _peopleDatabase: KategoriDatabase,
// 		private _paginator: MdPaginator,
// 		private _sort: MdSort) {
// 		super();

// 		// Subscribe to paging, sorting, and database changes by clearing the cached data and
// 		// determining the updated display data.
// 		Observable.merge(this._paginator.page,
// 			this._peopleDatabase.dataChange,
// 			this._sort.mdSortChange).subscribe(() => {
// 				this._renderedData = [];
// 				this.updateDisplayData();
// 			});
// 	}

// 	$$connect(collectionViewer: CollectionViewer): Observable<CategoryData[]> {
// 		this.updateDisplayData();

// 		const streams = [collectionViewer.viewChange, this._displayData];
// 		return Observable.combineLatest(streams)
// 			.map((results: [{ start: number, end: number }, CategoryData[]]) => {
// 				const [view, data] = results;
// 				// Set the rendered rows length to the virtual page size. Fill in the data provided
// 				// from the index start until the end index or pagination size, whichever is smaller.
// 				this._renderedData.length = data.length;
// 				const buffer = 20;
// 				const rangeStart = Math.max(0, view.start - buffer);
// 				const rangeEnd = Math.min(data.length, view.end + buffer);
// 				for (let i = rangeStart; i < rangeEnd; i++) {
// 					this._renderedData[i] = data[i];
// 				}
// 				return this._renderedData;
// 			});
// 	}

// 	updateDisplayData() {
// 		const data = this.getSortedData();

// 		// Grab the page's slice of data.
// 		const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
// 		const paginatedData = data.splice(startIndex, this._paginator.pageSize);

// 		this._displayData.next(paginatedData);
// 	}

// 	/** Returns a sorted copy of the database data. */
// 	getSortedData(): CategoryData[] {
// 		const data = this._peopleDatabase.data.slice();
// 		if (!this._sort.active || this._sort.direction === '') { return data; }

// 		return data.sort((a, b) => {
// 			let propertyA: number | string = '';
// 			let propertyB: number | string = '';

// 			switch (this._sort.active) {
// 				case 'UUID': [propertyA, propertyB] = [a.UUID, b.UUID]; break;
// 				case 'categoryName': [propertyA, propertyB] = [a.categoryName, b.categoryName]; break;
// 				case 'createdAt': [propertyA, propertyB] = [a.createdAt, b.createdAt]; break;
// 			}

// 			const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
// 			const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

// 			return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
// 		});
// 	}
// }
