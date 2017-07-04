import { Component, Inject, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MdDialog, MdDialogRef } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ConfigService } from '../../../../Services/config/config.service';
import { NgAdminKategoriFormComponent } from '../ng-admin-kategori-form/ng-admin-kategori-form.component';
import { DOCUMENT } from '@angular/platform-browser';

declare var io: any;

@Component({
	selector: 'app-ng-admin-kategori-data-table',
	templateUrl: './ng-admin-kategori-data-table.component.html',
	styleUrls: ['./ng-admin-kategori-data-table.component.scss']
})
export class NgAdminKategoriDataTableComponent {
	private Socket_Category = io(this.__configService.SocketIO.origin);
	options = [
		{ text: 'Tambah' },
		{ text: 'foo' },
		{ text: 'bar' },
		{ text: 'baz' },
	];
	$Categories: any[] | null = [];
	actionsAlignment: string;
	constructor(public __mdDialog$$: MdDialog, private __configService: ConfigService, @Inject(DOCUMENT) doc: any) {
		const __p__this = this;
		this.Socket_Category.on('Category.Data.get', ($Categories) => {
			__p__this.$Categories = $Categories;
		});
		this.Socket_Category.on('Category.Data.add', (data) => {
			__p__this.$Categories = [ data, ...__p__this.$Categories];
		});
		this.Socket_Category.on('Category.Data.delete', (UUID) => {
			const Categories = __p__this.$Categories;
			const _Categories = [];
			for (let i = 0; i < Categories.length ; i++) {
				if (Categories[i].UUID !== UUID) {
					_Categories.push(Categories[i]);
				}
			}
			__p__this.$Categories = _Categories;
		});
		//
		__mdDialog$$.afterOpen.subscribe(() => {
			if (!doc.body.classList.contains('no-scroll')) {
				doc.body.classList.add('no-scroll');
			}
		});
		__mdDialog$$.afterAllClosed.subscribe(() => {
			doc.body.classList.remove('no-scroll');
		});
	}
	delete(UUID: string): void {
		if (confirm('Hapus')) {
			this.Socket_Category.emit('Category.Data.delete', UUID)
		}
	}
	openForm(): void {
		const dialogRef = this.__mdDialog$$.open(NgAdminKategoriFormComponent, {
			disableClose: false,
			panelClass: 'custom-overlay-pane-class',
			hasBackdrop: true,
			backdropClass: '',
			width: '',
			height: '',
			position: { top: '', bottom: '', left: '', right: '' },
			data: { message: 'Jazzy jazz jazz' }
		});
		dialogRef.componentInstance.$KategoriForm$
			.subscribe(() => {
				dialogRef.close();
			});
	}
}
