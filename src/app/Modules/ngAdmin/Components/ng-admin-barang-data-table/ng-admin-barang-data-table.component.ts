import { Component, ElementRef, EventEmitter, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgAdminBarangFormComponent } from '../ng-admin-barang-form/ng-admin-barang-form.component';
import { MdDialog, MdDialogRef, MdPaginator, MdSort } from '@angular/material';
import { ConfigService } from '../../../../Services/config/config.service';
import { DOCUMENT } from '@angular/platform-browser';
import { Action } from '../../../../Types/actions';
import { Category } from '../../../../Interfaces/category';
import { Item } from '../../../../Interfaces/item';

import { ItemDatabase } from './barang.database';
import { ItemDataSource } from './barang.datasource';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

declare var io: SocketIOStatic;

@Component({
	selector: 'app-ng-admin-barang-data-table',
	templateUrl: './ng-admin-barang-data-table.component.html',
	styleUrls: ['./ng-admin-barang-data-table.component.scss']
})
export class NgAdminBarangDataTableComponent implements OnDestroy, OnInit {
	@ViewChild(MdPaginator) _paginator_: MdPaginator;
	@ViewChild(MdSort) _sort_: MdSort;
	@ViewChild('filter') filter: ElementRef;
	displayedColumns = ['Type', 'Image', 'Name', 'Price' , 'Stock', 'Description', '_id'];
	$update$ = new EventEmitter<Item>();
	$Items: Item[] | null;
	$Socket: SocketIO.Server;
	dataSource: ItemDataSource | null;
	database = new ItemDatabase();
	constructor(
		public __mdDialog$$: MdDialog,
		public __configService: ConfigService,
		@Inject(DOCUMENT) doc: any
	) {
		this.$Socket = io(this.__configService.SocketIO.origin + '/data/item');
	}
	ngOnDestroy() {
		this.$Socket = null;
	}
	ngOnInit() {
		this.dataSource = new ItemDataSource(this.database, this._paginator_, this._sort_);
		Observable.fromEvent(this.filter.nativeElement, 'keyup')
			.debounceTime(150).distinctUntilChanged()
			.subscribe(() => {
				if (!this.dataSource) { return; }
				this.dataSource.filter = this.filter.nativeElement.value;
			});
	}
	delete(_id: string) {
		if (confirm('Hapus?')) {
			this.$Socket.emit('delete', _id);
		}
		alert(_id);
	}
	wbr(str: string): string {
		const val = str.split('');
		let retVal = '';
		for (let i = 0; i < val.length; i++) {
			if (i % 5) {
				retVal += val[i] + '<wbr>';
			} else {
				retVal += val[i]
			}
		}
		return retVal;
	}
}
