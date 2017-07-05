import { Component, Inject, ViewChild } from '@angular/core';
import { NgAdminKategoriFormComponent } from '../ng-admin-kategori-form/ng-admin-kategori-form.component';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ConfigService } from '../../../../Services/config/config.service';
import { DOCUMENT } from '@angular/platform-browser';
import { Action } from '../../../../Types/actions';
import { Category } from '../../../../Classes/category';

declare var io: SocketIOStatic;
@Component({
	selector: 'app-ng-admin-kategori-data-table',
	templateUrl: './ng-admin-kategori-data-table.component.html',
	styleUrls: ['./ng-admin-kategori-data-table.component.scss']
})
export class NgAdminKategoriDataTableComponent {
	private $Socket: SocketIO.Server = io(this.__configService.SocketIO.origin);
	options = [
		{ text: 'Tambah' },
		{ text: 'foo' },
		{ text: 'bar' },
		{ text: 'baz' },
	];
	$Categories: Category[] | null = [];
	actionsAlignment: string;
	constructor(
		public __mdDialog$$: MdDialog,
		private __configService: ConfigService,
		@Inject(DOCUMENT) doc: any
	) {
		const __p__this = this;
		this.$Socket.on('Category.Data.get', ($Categories) => {
			__p__this.$Categories = $Categories;
		});
		this.$Socket.on('Category.Data.add', (data) => {
			__p__this.$Categories = [ data, ...__p__this.$Categories];
		});
		this.$Socket.on('Category.Data.delete', (UUID) => {
			const Categories = __p__this.$Categories;
			const _Categories = [];
			for (let i = 0; i < Categories.length ; i++) {
				if (Categories[i].UUID !== UUID) {
					_Categories.push(Categories[i]);
				}
			}
			__p__this.$Categories = _Categories;
		});
		this.$Socket.on('Category.Data.update', (Category: Category) => {
			const _Categories = [];
			for (let i = 0; i < this.$Categories.length; i++) {
				if (Category.UUID === this.$Categories[i].UUID) {
					this.$Categories[i].categoryName = Category.categoryName;
				}
				_Categories.push(this.$Categories[i]);
			}
			this.$Categories = _Categories;
		});
	}
	delete(UUID: string): void {
		if (confirm('Hapus')) {
			this.$Socket.emit('Category.Data.delete', UUID)
		}
	}
	openForm(action: Action, Category?: Category): void {
		const dialogRef = this.__mdDialog$$.open(NgAdminKategoriFormComponent);
		dialogRef.componentInstance.action = action;
		dialogRef.componentInstance.Category = Category;
		dialogRef.componentInstance.$KategoriForm$
			.subscribe(() => {
				dialogRef.close();
			});
	}
}
