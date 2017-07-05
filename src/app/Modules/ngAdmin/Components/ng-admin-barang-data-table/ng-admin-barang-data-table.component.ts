import { Component, Inject } from '@angular/core';
import { NgAdminBarangFormComponent } from '../ng-admin-barang-form/ng-admin-barang-form.component';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ConfigService } from '../../../../Services/config/config.service';
import { DOCUMENT } from '@angular/platform-browser';
import { Action } from '../../../../Types/actions';
import { Category } from '../../../../Classes/category';
import { Item } from '../../../../Interfaces/item';

declare var io: SocketIOStatic;

@Component({
	selector: 'app-ng-admin-barang-data-table',
	templateUrl: './ng-admin-barang-data-table.component.html',
	styleUrls: ['./ng-admin-barang-data-table.component.scss']
})
export class NgAdminBarangDataTableComponent {
	options = [
		{ text: 'Tambah' },
		{ text: 'foo' },
		{ text: 'bar' },
		{ text: 'baz' },
	];
	$Items: Item[] | null;
	$Socket: SocketIO.Server = io(this.__configService.SocketIO.origin);
	constructor(
		public __mdDialog$$: MdDialog,
		private __configService: ConfigService,
		@Inject(DOCUMENT) doc: any
	) {
		const __p__this = this;
		this.$Socket.on('Item.Data.get', (Items: Item[]) => {
			__p__this.$Items = Items;
			__p__this.$Items.map((_Item) => {
				console.log(_Item.Category);
			});
		});
		this.$Socket.on('Item.Data.add', (Item: Item) => {
			__p__this.$Items.unshift(Item);
		});
	}
	openForm(action: Action, Category?: Category): void {
		const dialogRef = this.__mdDialog$$.open(NgAdminBarangFormComponent, {width: '70%'});
		dialogRef.componentInstance.$submit$.subscribe(() => { dialogRef.close() });
	}
}
