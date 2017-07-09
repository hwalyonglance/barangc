import { Component, EventEmitter, Inject, OnDestroy } from '@angular/core';
import { NgAdminBarangFormComponent } from '../ng-admin-barang-form/ng-admin-barang-form.component';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ConfigService } from '../../../../Services/config/config.service';
import { DOCUMENT } from '@angular/platform-browser';
import { Action } from '../../../../Types/actions';
import { Category } from '../../../../Interfaces/category';
import { Item } from '../../../../Interfaces/item';
import { $Socket } from './ng-admin-barang-data-table.socketio';

@Component({
	selector: 'app-ng-admin-barang-data-table',
	templateUrl: './ng-admin-barang-data-table.component.html',
	styleUrls: ['./ng-admin-barang-data-table.component.scss']
})
export class NgAdminBarangDataTableComponent implements OnDestroy {
	$update$ = new EventEmitter<Item>();
	$Items: Item[] | null;
	$Socket: SocketIO.Server | null;
	constructor(
		public __mdDialog$$: MdDialog,
		private __configService: ConfigService,
		@Inject(DOCUMENT) doc: any
	) {
		$Socket(this, this.__configService.SocketIO.origin);
	}
	ngOnDestroy() {
		this.$Socket = null;
	}
	delete(UUID: string) {
		this.$Socket.emit('Item.Data.delete', UUID);
	}
}
