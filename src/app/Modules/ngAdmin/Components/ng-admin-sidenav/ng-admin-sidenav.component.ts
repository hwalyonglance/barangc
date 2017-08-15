import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-ng-admin-sidenav',
	templateUrl: './ng-admin-sidenav.component.html',
	styleUrls: ['./ng-admin-sidenav.component.scss']
})
export class NgAdminSidenavComponent {
	@Output() $ngadminSidenav$ = new EventEmitter();
	items = [
		{ text: 'Dashboard', route: 'dashboard' },
		{ text: 'Users', route: 'users' },
		{ text: 'Kategori', route: 'kategori' },
		{ text: 'Barang', route: 'barang' },
		{ text: 'Transaksi', route: 'transaksi' },
		{ text: 'Testimoni', route: 'testimoni' },
		{ text: 'rp', route: 'rp/iniId' }
	];
	constructor() {}
}
