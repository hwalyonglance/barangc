import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as _BARANG_FORM_ from './ng-admin-kategori.form';

@Component({
	selector: 'app-ng-admin-kategori-form',
	templateUrl: './ng-admin-kategori-form.component.html',
	styleUrls: ['./ng-admin-kategori-form.component.scss']
})
export class NgAdminKategoriFormComponent implements OnInit {
	_FORM_ = _BARANG_FORM_;
	categoryForm: FormGroup;
	constructor(private _formBuilder$$: FormBuilder, private _router$$: Router) {}
	ngOnInit() {
		this.buildNgauthNgadminForm();
	}
	buildNgauthNgadminForm(): void {
		this.categoryForm = this._formBuilder$$.group(this._FORM_.FORM_GROUP_OBJECT_PARAM);
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
			UUID: this._FORM_.randomString(),
			categoryName: ' '
		});
	}
}
