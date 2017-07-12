import { Component, EventEmitter, Inject, OnDestroy } from '@angular/core';
import { NgAdminBarangFormComponent } from '../ng-admin-barang-form/ng-admin-barang-form.component';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ConfigService } from '../../../../Services/config/config.service';
import { DOCUMENT } from '@angular/platform-browser';
import { Action } from '../../../../Types/actions';
import { Category } from '../../../../Interfaces/category';
import { Item } from '../../../../Interfaces/item';
import { $Socket } from './ng-admin-barang-data-table.socketio';

declare var io: SocketIOStatic;

@Component({
	selector: 'app-ng-admin-barang-data-table',
	templateUrl: './ng-admin-barang-data-table.component.html',
	styleUrls: ['./ng-admin-barang-data-table.component.scss']
})
export class NgAdminBarangDataTableComponent implements OnDestroy {
	$update$ = new EventEmitter<Item>();
	$Items: Item[] | null;
	$Socket: SocketIO.Server;
	constructor(
		public __mdDialog$$: MdDialog,
		public __configService: ConfigService,
		@Inject(DOCUMENT) doc: any
	) {
		this.$Socket = io(this.__configService.SocketIO.origin + '/data/item');
		$Socket(this);
	}
	ngOnDestroy() {
		this.$Socket = null;
	}
	delete(_id: string) {
		if (confirm('Hapus?')) {
			this.$Socket.emit('delete', _id);
		}
		alert(_id);
	}
}
