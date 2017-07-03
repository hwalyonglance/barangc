import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CollectionViewer, DataSource, MdPaginator, MdSort } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ConfigService } from '../../../../Services/config/config.service';

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
	constructor(private __configService: ConfigService) {
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
				console.log(UUID, ' ------------ ', Categories[i]);
				if (Categories[i].UUID !== UUID) {
					_Categories.push(Categories[i]);
				}
			}
			__p__this.$Categories = _Categories;
		});
	}
	delete(UUID: string): void {
		if (confirm('Hapus')) {
			this.Socket_Category.emit('Category.Data.delete', UUID)
		}
	}
}
