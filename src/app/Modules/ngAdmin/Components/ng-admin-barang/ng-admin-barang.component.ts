import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { NgAdminBarangDataTableComponent } from '../ng-admin-barang-data-table/ng-admin-barang-data-table.component';
import { NgAdminBarangFormComponent } from '../ng-admin-barang-form/ng-admin-barang-form.component';
import { ConfigService } from '../../../../Services/config/config.service';
import { DOCUMENT } from '@angular/platform-browser';
import { Action } from '../../../../Types/actions';
import { Item } from '../../../../Interfaces/item';

declare var io: SocketIOStatic;
@Component({
	selector: 'app-ng-admin-barang',
	templateUrl: './ng-admin-barang.component.html',
	styleUrls: ['./ng-admin-barang.component.scss']
})
export class NgAdminBarangComponent implements AfterViewInit {
	@ViewChild(NgAdminBarangDataTableComponent) _ItemDataTable_: NgAdminBarangDataTableComponent;
	options = [
		{ text: 'Tambah' },
		{ text: 'foo' },
		{ text: 'bar' },
		{ text: 'baz' },
	];
	constructor(
		public __mdDialog$$: MdDialog
	) {}
	ngAfterViewInit() {
		const __p__this = this;
		this._ItemDataTable_.$update$.subscribe(($Item: Item) => {
			__p__this.openForm('Update', $Item);
		});
	}
	openForm(action: Action, Item: Item): void {
		const dialogRef = this.__mdDialog$$.open(NgAdminBarangFormComponent, { width: '70%' });
		dialogRef.componentInstance.$Item = Item;
		dialogRef.componentInstance.$action$.emit(action);
		dialogRef.componentInstance.$submit$.subscribe(() => { dialogRef.close() });
	}
}
