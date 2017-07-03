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
	Category_Datas: any[] | null = [];
	constructor(private __configService: ConfigService) {
		this.initialize();
		this.Socket_Category.on('Category.Data.add', function(data){
			localStorage.setItem('Category_Data_Last', JSON.stringify(data));
		});
		const __p__this = this;
		this.Socket_Category.on('Category.Data.delete', function (UUID) {
			const Categories = JSON.parse(localStorage.getItem('Database_Categories'));
			const _Categories = [];
			for (const i in Categories) {
				if (Categories[i].UUID !== UUID) {
					_Categories.push(Categories[i]);
				}
			}
			localStorage.setItem('Database_Categories', JSON.stringify(_Categories));
			__p__this.initialize();
		});
	}
	initialize(): void {
		try {
			if (localStorage.getItem('Database_Categories') !== null) {
				this.Category_Datas = JSON.parse(localStorage.getItem('Database_Categories'));
			}
		} catch (error) {
			this.Category_Datas = [];
		}
	}
	tambah(): void {
		this.Category_Datas = [ JSON.parse(localStorage.getItem('Category_Data_Last')) , ...this.Category_Datas];
		localStorage.setItem('Database_Categories', JSON.stringify(this.Category_Datas));
	}
	edit(): void {}
	delete(UUID: string): void {
		this.Socket_Category.emit('Category.Data.delete', UUID);
		alert('Delete');
	}
	// onDelete
}

// tambah(): void {
// 	const lastCategory = JSON.parse(localStorage.getItem('Category_Data_Last'));
// 	const _Category_Datas = this.Category_Datas;
// 	this.Category_Datas.push(lastCategory);
// 	localStorage.setItem('Database_Categories', JSON.stringify(this.Category_Datas));
// }
