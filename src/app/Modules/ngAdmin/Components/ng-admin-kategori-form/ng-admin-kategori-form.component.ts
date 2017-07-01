import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as _BARANG_FORM_ from './ng-admin-kategori.form';
import { FormService } from '../../../../Services/form/form.service';


@Component({
	selector: 'app-ng-admin-kategori-form',
	templateUrl: './ng-admin-kategori-form.component.html',
	styleUrls: ['./ng-admin-kategori-form.component.scss']
})
export class NgAdminKategoriFormComponent implements OnInit {
	_FORM_ = _BARANG_FORM_;
	categoryForm: FormGroup;
	type = 'Tambah';
	constructor(private __formBuilder$$: FormBuilder, private __router$$: Router, private _formService: FormService) {}
	ngOnInit() {
		this.buildNgauthNgadminForm();
	}
	buildNgauthNgadminForm(): void {
		this.categoryForm = this.__formBuilder$$.group(this._FORM_.FORM_GROUP_OBJECT_PARAM);
		this.categoryForm.patchValue({
			UUID: this._formService.randomString()
		});
	}
	onSubmit(controls): void {
		const KATEGORI = {
			UUID: controls.UUID.value,
			categoryName: controls.categoryName.value.trim(),
			created_at: Date.now()
		};
		let _store: object[] = [{}];
		try {
			_store = JSON.parse(String(window.localStorage.kategori));
		} catch (error) {
			_store = [];
		}
		_store.push(KATEGORI);
		window.localStorage.kategori = JSON.stringify(_store);
		console.log(JSON.parse(window.localStorage.kategori));
		this.clearForm();
	}
	clearForm(): void {
		this.categoryForm.reset({
			UUID: this._formService.randomString(),
			categoryName: ' '
		});
	}
}
