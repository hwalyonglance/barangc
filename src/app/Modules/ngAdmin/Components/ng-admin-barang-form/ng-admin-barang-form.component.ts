import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as _barangForm_ from './ng-admin-barang.form';
import { ConfigService } from '../../../../Services/config/config.service';
import { FormService } from '../../../../Services/form/form.service';
import { Action } from '../../../../Types/actions';
import { Category } from '../../../../Classes/category';

declare var io: SocketIOStatic;
@Component({
	selector: 'app-ng-admin-barang-form',
	templateUrl: './ng-admin-barang-form.component.html',
	styleUrls: ['./ng-admin-barang-form.component.scss']
})
export class NgAdminBarangFormComponent {
	FORM = _barangForm_;
	barangForm: FormGroup;
	action: Action = 'Add';
	$Categories: Category[] | null;
	$Socket: SocketIO.Server = io(this._config.SocketIO.origin);
	constructor(private __formBuilder$$: FormBuilder, private _formService: FormService, private _config: ConfigService) {
		const __p__this = this;
		this.barangForm = this.__formBuilder$$.group(this.FORM.FORM_GROUP_OBJECT_PARAM);
		this.barangForm.patchValue({
			UUID: this._formService.randomString().toLowerCase()
		});
		this.barangForm.get('harga').valueChanges.subscribe((val) => {
			if (val < 500) {
				__p__this.barangForm.get('harga').setValue(500);
			}
		});
		this.$Socket.on('Category.Data.get', (Categories: Category[]) => {
			__p__this.$Categories = Categories;
		});
		this.$Socket.on('Category.Data.add', (data) => {
			__p__this.$Categories = [data, ...__p__this.$Categories];
		});
		this.$Socket.on('Category.Data.delete', (UUID) => {
			const Categories = __p__this.$Categories;
			const _Categories = [];
			for (let i = 0; i < Categories.length; i++) {
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
	onSubmit(_barangForm: FormGroup): void {
		const barangData = {
			UUID: _barangForm.get('UUID').value,
			userUUID: window.localStorage.ngadmin,
			categoryUUID: _barangForm.get('categoryUUID').value,
			nama: _barangForm.get('nama').value,
			harga: _barangForm.get('harga').value,
			stok: _barangForm.get('stok').value,
			keterangan: _barangForm.get('keterangan').value
		};
		console.log(barangData);
	}
	onKeyPress($event: KeyboardEvent) {
		const number = ($event.keyCode >= 48) && ($event.keyCode <= 57);
		const _ = ($event.keyCode === 95);
		const alphabet = ($event.keyCode >= 97) && ($event.keyCode <= 122);
		const ALPHABET = ($event.keyCode >= 65) && ($event.keyCode <= 90);
		if (!number) {
			$event.preventDefault();
		}
	}
}
