import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CollectionViewer, DataSource, MdPaginator, MdSort } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// import { KategoriDatabase } from './kategori-database';

type UserProperties = 'UUID' | 'categoryName' | 'createdAt' | undefined;
type TrackByStrategy = 'id' | 'reference' | 'index';

interface CategoryData {
	UUID: string;
	categoryName: string;
	createdAt: string;
};

@Component({
	selector: 'app-ng-admin-kategori-data-table',
	templateUrl: './ng-admin-kategori-data-table.component.html',
	styleUrls: ['./ng-admin-kategori-data-table.component.scss']
})
export class NgAdminKategoriDataTableComponent {
	// dataSource: KategoriDataSource | null;
	propertiesToDisplay: UserProperties[] = [];
	// trackByStrategy: TrackByStrategy = 'reference';
	// changeReferences = false;
	// highlights = new Set<string>();
	// @ViewChild(MdPaginator) _paginator: MdPaginator;
	// @ViewChild(MdSort) sort: MdSort;
	// dataChange: BehaviorSubject<CategoryData[]> = new BehaviorSubject<CategoryData[]>([]); //
	constructor() {}
	connect() {
		this.propertiesToDisplay = ['UUID', 'categoryName', 'createdAt'];
		// this.data
	}
}
