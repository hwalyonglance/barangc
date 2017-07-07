import { Component, EventEmitter, Inject, ViewChild } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ConfigService } from '../../../../Services/config/config.service';
import { DOCUMENT } from '@angular/platform-browser';
import { NgAdminKategoriFormComponent } from '../ng-admin-kategori-form/ng-admin-kategori-form.component';
import { Action } from '../../../../Types/actions';
import { Category } from '../../../../Interfaces/category';
import { $Socket } from './ng-admin-kategori-data-table.socketio';


declare var io: SocketIOStatic;
@Component({
	selector: 'app-ng-admin-kategori-data-table',
	templateUrl: './ng-admin-kategori-data-table.component.html',
	styleUrls: ['./ng-admin-kategori-data-table.component.scss']
})
export class NgAdminKategoriDataTableComponent {
	private $Socket: SocketIO.Server = io(this.__configService.SocketIO.origin);
	$update$ = new EventEmitter<Category>();
	$Categories: Category[] | null = [];
	constructor(
		public __mdDialog$$: MdDialog,
		private __configService: ConfigService,
		@Inject(DOCUMENT) doc: any
	) {
		$Socket(this);
	}
	delete(UUID: string): void {
		if (confirm('Hapus')) {
			this.$Socket.emit('Category.Data.delete', UUID)
		}
	}
}
