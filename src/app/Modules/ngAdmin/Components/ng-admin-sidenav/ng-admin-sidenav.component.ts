import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-ngadmin-sidenav',
	templateUrl: './ngadmin-sidenav.component.html',
	styleUrls: ['./ngadmin-sidenav.component.scss']
})
export class NgAdminSidenavComponent implements OnInit {
	@Output() $ngadminSidenav$ = new EventEmitter();
	items = [
		{ text: 'Dashboard', route: 'dashboard' },
		{ text: 'Users', route: 'users' },
		{ text: 'Kategori', route: 'kategori' },
		{ text: 'Barang', route: 'barang' },
		{ text: 'Transaksi', route: 'transaksi' },
		{ text: 'Testimoni', route: 'testimoni' }
	];
	constructor() {}

	ngOnInit() {}

}
