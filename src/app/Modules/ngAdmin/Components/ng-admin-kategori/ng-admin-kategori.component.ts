import { AfterViewInit, Component, Inject, ViewChild, EventEmitter } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ConfigService } from '../../../../Services/config/config.service';
import { DOCUMENT } from '@angular/platform-browser';
import { NgAdminKategoriDataTableComponent } from '../ng-admin-kategori-data-table/ng-admin-kategori-data-table.component';
import { NgAdminKategoriFormComponent } from '../ng-admin-kategori-form/ng-admin-kategori-form.component';
import { Action } from '../../../../Types/actions';
import { Category } from '../../../../Interfaces/category';


// declare var io: SocketIOStatic;
declare var io: any;
@Component({
	selector: 'app-ng-admin-kategori',
	templateUrl: './ng-admin-kategori.component.html',
	styleUrls: ['./ng-admin-kategori.component.scss']
})
export class NgAdminKategoriComponent implements AfterViewInit {
	@ViewChild(NgAdminKategoriDataTableComponent) _CategoryDataTable_: NgAdminKategoriDataTableComponent;
	private $Socket: SocketIO.Server = io(this.__configService.SocketIO.origin);
	options = [
		{ text: 'Tambah' },
		{ text: 'foo' },
		{ text: 'bar' },
		{ text: 'baz' },
	];
	constructor(
		public __mdDialog$$: MdDialog,
		private __configService: ConfigService,
		@Inject(DOCUMENT) doc: any
	) {}
	ngAfterViewInit() {
		const __p__this = this;
		this._CategoryDataTable_.$update$.subscribe(($Category: Category) => {
			__p__this.openForm('Update', $Category);
		});
	}
	openForm(action: Action, Category?: Category): void {
		const dialogRef = this.__mdDialog$$.open(NgAdminKategoriFormComponent);
		dialogRef.componentInstance.action = action;
		dialogRef.componentInstance.Category = Category;
		dialogRef.componentInstance.$KategoriForm$.subscribe(() => {dialogRef.close(); });
	}
}
