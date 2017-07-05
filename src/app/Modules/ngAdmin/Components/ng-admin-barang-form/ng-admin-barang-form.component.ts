import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MdDialog } from '@angular/material';
import * as _barangForm_ from './ng-admin-barang.form';
import { ConfigService } from '../../../../Services/config/config.service';
import { FormService } from '../../../../Services/form/form.service';
import { Action } from '../../../../Types/actions';
import { Category } from '../../../../Interfaces/category';
import { Item } from '../../../../Interfaces/item';
import { ImgpComponent } from '../../../../Components/imgp/imgp.component';

import { foto as _ } from './foto';

declare var io: SocketIOStatic;
@Component({
	selector: 'app-ng-admin-barang-form',
	templateUrl: './ng-admin-barang-form.component.html',
	styleUrls: ['./ng-admin-barang-form.component.scss']
})
export class NgAdminBarangFormComponent {
	@Output() $submit$ = new EventEmitter();
	@ViewChild('itf') itf: any;
	@ViewChild('imgp') imgp: any;
	FORM = _barangForm_;
	barangForm: FormGroup;
	foto = _;
	action: Action = 'Add';
	$Categories: Category[] | null;
	$Socket: SocketIO.Server = io(this._config.SocketIO.origin);
	constructor(
		private __formBuilder$$: FormBuilder,
		public __mdDialog$$: MdDialog,
		private _formService: FormService,
		private _config: ConfigService
	) {
		const __p__this = this;
		this.barangForm = this.__formBuilder$$.group(this.FORM.FORM_GROUP_OBJECT_PARAM);
		this.barangForm.get('UUID').setValue(this._formService.randomString().toLowerCase());
		this.barangForm.get('foto').setValue(_);
		this.barangForm.get('harga').valueChanges.subscribe((val) => {
			if (val < __p__this.FORM.RULES.harga.min) { __p__this.barangForm.get('harga').setValue(__p__this.FORM.RULES.harga.min); }
			if (val > __p__this.FORM.RULES.harga.max) { __p__this.barangForm.get('harga').setValue(__p__this.FORM.RULES.harga.max); }
		});
		this.barangForm.get('stok').valueChanges.subscribe((val) => {
			if (val < __p__this.FORM.RULES.stok.min) { __p__this.barangForm.get('stok').setValue(__p__this.FORM.RULES.stok.min); }
			if (val > __p__this.FORM.RULES.stok.max) { __p__this.barangForm.get('stok').setValue(__p__this.FORM.RULES.stok.max); }
		});
		this.$Socket.on('Category.Data.get', (Categories: Category[]) => {
			__p__this.$Categories = Categories;
		});
		this.$Socket.on('Category.Data.add', (Category: Category) => {
			__p__this.$Categories.unshift(Category);
		});
		this.$Socket.on('Category.Data.delete', (UUID) => {
			const Categories = __p__this.$Categories;
			const _Categories = [];
			for (let i = 0; i < Categories.length; i++) {
				if (Categories[i].UUID !== UUID) { _Categories.push(Categories[i]); }
			} __p__this.$Categories = _Categories;
		});
		this.$Socket.on('Category.Data.update', (Category: Category) => {
			this.$Categories = this.$Categories.map(($Category: Category) => {
				if ($Category.UUID === Category.UUID) {
					$Category = Category;
				}return $Category
			});
		});
	}
	onSubmit(_barangForm: FormGroup): void {
		const $Category: Category = _barangForm.get('Category').value
		const barangData: Item = {
			UUID: _barangForm.get('UUID').value,
			ngadmin: window.localStorage.ngadmin,
			Category: {
				UUID: $Category.UUID,
				name: $Category.name,
				createdAt: $Category.createdAt,
				updatedAt: $Category.updatedAt
			},
			name: _barangForm.get('nama').value,
			image: _barangForm.get('foto').value,
			price: _barangForm.get('harga').value,
			stock: _barangForm.get('stok').value,
			desc: _barangForm.get('keterangan').value
		};
		Object.keys(barangData).map((key) => {
			console.log(barangData[key]);
		});
		this.$Socket.emit('Item.Form.add', barangData);
		this.$submit$.next();
	}
	onKeyPress($event: KeyboardEvent): void {
		const number = ($event.keyCode >= 48) && ($event.keyCode <= 57);
		if (!number) {
			$event.preventDefault();
		}
	}
	file(): void {
		const __p__this = this;
		const files = this.itf.nativeElement.files;
		const fr = new FileReader();
		fr.onload = function ($event) {
			__p__this.barangForm.get('foto').setValue($event.target['result']);
		}
		if (files[0]) {
			fr.readAsDataURL(files[0]);
		}
	}
	view(): void {
		const dialogRef = this.__mdDialog$$.open(ImgpComponent, {width: '550px'});
		dialogRef.componentInstance.imgp.nativeElement.src = this.barangForm.get('foto').value;
	}
}
