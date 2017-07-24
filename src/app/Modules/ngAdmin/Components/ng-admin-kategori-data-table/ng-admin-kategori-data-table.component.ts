import { Component, ElementRef, EventEmitter, Inject, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MdDialog, MdDialogRef, MdPaginator, MdSort } from '@angular/material';
import { NgAdminKategoriFormComponent } from '../ng-admin-kategori-form/ng-admin-kategori-form.component';
import { Action } from '../../../../Types/actions';
import { Category } from '../../Interfaces/category';
import { $Socket } from './ng-admin-kategori-data-table.socketio';

import { CONFIG } from '../../../../../environments/config';
import { CategoryDatabase } from './kategori.database';
import { CategoryDataSource } from './kategori.datasource';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

import { SocketIOStatic, Server } from '../../../../Interfaces/socket.io';
declare var io: SocketIOStatic;

@Component({
	selector: 'app-ng-admin-kategori-data-table',
	templateUrl: './ng-admin-kategori-data-table.component.html',
	styleUrls: ['./ng-admin-kategori-data-table.component.scss']
})
export class NgAdminKategoriDataTableComponent implements OnDestroy, OnInit {
	@ViewChild(MdPaginator) _paginator_: MdPaginator;
	@ViewChild(MdSort) _sort_: MdSort;
	@ViewChild('filter') filter: ElementRef;
	$Socket: Server | null = io( CONFIG.SocketIO.origin + '/data/category');
	$update$ = new EventEmitter<Category>();
	$Categories: Category[] | null = [];
	displayedColumns = ['type', '_id'];
	dataSource: CategoryDataSource | null;
	database = new CategoryDatabase();
	constructor(
		public __mdDialog$$: MdDialog
	) {}
	ngOnInit() {
		this.dataSource = new CategoryDataSource(this.database, this._paginator_, this._sort_);
		Observable.fromEvent(this.filter.nativeElement, 'keyup')
			.debounceTime(150).distinctUntilChanged()
			.subscribe(() => {
				if (!this.dataSource) { return; }
				this.dataSource.filter = this.filter.nativeElement.value;
			});
	}
	ngOnDestroy() {
		this.$Socket = null;
	}
	delete(_id: string): void {
		if (confirm('Hapus')) {
			this.$Socket.emit('delete', _id)
		}
	}
}
