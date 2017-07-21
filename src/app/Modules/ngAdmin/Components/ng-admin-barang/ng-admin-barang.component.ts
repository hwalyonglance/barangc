import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { MdDialog, MdDialogRef, MdPaginator, MdSort } from '@angular/material';
import { NgAdminBarangDataTableComponent } from '../ng-admin-barang-data-table/ng-admin-barang-data-table.component';
import { NgAdminBarangFormComponent } from '../ng-admin-barang-form/ng-admin-barang-form.component';
import { CssService } from '../../../../Services/animate-css.service';
import { Action } from '../../../../Types/actions';
import { Category } from '../../Interfaces/category';
import { Item } from '../../Interfaces/item';
import { $Socket } from './ng-admin-barang.socketio';


@Component({
	selector: 'app-ng-admin-barang',
	templateUrl: './ng-admin-barang.component.html',
	styleUrls: ['./ng-admin-barang.component.scss']
})
export class NgAdminBarangComponent implements AfterViewInit, OnInit {
	@ViewChild(NgAdminBarangDataTableComponent) _ItemDataTable_: NgAdminBarangDataTableComponent;
	$Categories$ = new EventEmitter();
	$Categories: Category[] | null;
	options = [
		{ text: 'Tambah' },
		{ text: 'foo' },
		{ text: 'bar' },
		{ text: 'baz' },
	];
	constructor(
		public __mdDialog$$: MdDialog,
		private _css: CssService
	) {
		$Socket(this);
	}
	ngAfterViewInit() {
		const $this = this;
		this._ItemDataTable_.$update$.subscribe(($Item: Item) => {
			$this.openForm('Update', $Item);
		});
	}
	ngOnInit() {}
	openForm(action: Action, Item: Item): void {
		const dialogRef = this.__mdDialog$$.open(NgAdminBarangFormComponent);
		this.$Categories$.subscribe(() => {
			dialogRef.componentInstance.$Categories = this.$Categories;
			alert('NgAdminBarangComponent.$Categories$ emitted');
		});
		dialogRef.componentInstance.$Categories = this.$Categories;
		dialogRef.componentInstance.$Item = Item;
		dialogRef.componentInstance.$action$.emit(action);
		dialogRef.componentInstance.$submit$.subscribe(() => { dialogRef.close() });
	}
}
