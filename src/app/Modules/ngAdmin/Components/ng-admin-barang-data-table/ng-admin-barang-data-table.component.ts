import { Component, Inject } from '@angular/core';
import { NgAdminBarangFormComponent } from '../ng-admin-barang-form/ng-admin-barang-form.component';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ConfigService } from '../../../../Services/config/config.service';
import { DOCUMENT } from '@angular/platform-browser';
import { Action } from '../../../../Types/actions';
import { Category } from '../../../../Classes/category';

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
	constructor(
		public __mdDialog$$: MdDialog,
		private __configService: ConfigService,
		@Inject(DOCUMENT) doc: any
	) {
		__mdDialog$$.afterOpen.subscribe(() => {
			if (!doc.body.classList.contains('no-scroll')) {
				doc.body.classList.add('no-scroll');
			}
		});
		__mdDialog$$.afterAllClosed.subscribe(() => {
			doc.body.classList.remove('no-scroll');
		});
	}
	openForm(action: Action, Category?: Category): void {
		const dialogRef = this.__mdDialog$$.open(NgAdminBarangFormComponent);
	}
}
