import { Component, EventEmitter, Inject, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MdDialog, MdDialogRef, MdPaginator, MdSort } from '@angular/material';
import { ConfigService } from '../../../../Services/config/config.service';
import { DOCUMENT } from '@angular/platform-browser';
import { NgAdminKategoriFormComponent } from '../ng-admin-kategori-form/ng-admin-kategori-form.component';
import { Action } from '../../../../Types/actions';
import { Category } from '../../../../Interfaces/category';
import { $Socket } from './ng-admin-kategori-data-table.socketio';

import { CategoryDatabase } from './kategori-database';
import { CategoryDataSource } from './kategori-datasource';

declare var io: SocketIOStatic; //

@Component({
	selector: 'app-ng-admin-kategori-data-table',
	templateUrl: './ng-admin-kategori-data-table.component.html',
	styleUrls: ['./ng-admin-kategori-data-table.component.scss']
})
export class NgAdminKategoriDataTableComponent implements OnDestroy, OnInit {
	@ViewChild(MdPaginator) _paginator_; MdPaginator;
	@ViewChild(MdSort) _sort_: MdSort;
	$Socket: SocketIO.Server | null = io(this.__configService.SocketIO.origin + '/data/category');
	$update$ = new EventEmitter<Category>();
	$Categories: Category[] | null = [];
	displayedColumns = ['type', '_id'];
	dataSource: CategoryDataSource | null;
	database = new CategoryDatabase();
	constructor(
		public __mdDialog$$: MdDialog,
		private __configService: ConfigService,
		@Inject(DOCUMENT) doc: any
	) {}
	ngOnDestroy() {
		this.$Socket = null;
	}
	ngOnInit() {
		this.dataSource = new CategoryDataSource(this.database, this._paginator_, this._sort_);
	}
	delete(_id: string): void {
		if (confirm('Hapus')) {
			this.$Socket.emit('delete', _id)
		}
	}
	rowClick() {
		alert('row clicked')
	}
	cellClick() {
		alert('cell clicked')
	}
	headerClick() {
		alert('header clicked')
	}
}
