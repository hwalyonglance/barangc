import { Component, ViewChild } from '@angular/core';
import { NgAdminKategoriDataTableComponent } from '../ng-admin-kategori-data-table/ng-admin-kategori-data-table.component';

@Component({
	selector: 'app-ng-admin-kategori',
	templateUrl: './ng-admin-kategori.component.html',
	styleUrls: ['./ng-admin-kategori.component.scss']
})
export class NgAdminKategoriComponent {
	@ViewChild(NgAdminKategoriDataTableComponent) _CategoryDataTable_: NgAdminKategoriDataTableComponent;
	constructor() {}
}
