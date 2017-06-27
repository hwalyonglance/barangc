import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-ngadmin-sidenav',
	templateUrl: './ngadmin-sidenav.component.html',
	styleUrls: ['./ngadmin-sidenav.component.scss']
})
export class NgadminSidenavComponent implements OnInit {
	@Output() $ngadminSidenav$ = new EventEmitter();
	items = [
		{ text: 'Kategori', route: 'kategori' },
		{ text: 'Barang', route: 'barang' },
		{ text: 'Transaksi', route: 'transaksi' },
		{ text: 'Testimoni', route: 'testimoni' }
	];
	constructor() {}

	ngOnInit() {}

}
