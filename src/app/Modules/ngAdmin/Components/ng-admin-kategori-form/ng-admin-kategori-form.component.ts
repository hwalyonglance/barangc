import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as _BARANG_FORM_ from './ng-admin-kategori.form';

@Component({
	selector: 'app-ng-admin-kategori-form',
	templateUrl: './ng-admin-kategori-form.component.html',
	styleUrls: ['./ng-admin-kategori-form.component.scss']
})
export class NgAdminKategoriFormComponent {
	_FORM_ = _BARANG_FORM_;
	barangForm: FormGroup;
	constructor(private _formBuilder$$: FormBuilder) {}
	buildNgauthNgadminForm(): void {
		this.barangForm = this._formBuilder$$.group(_BARANG_FORM_.FORM_GROUP_OBJECT_PARAM);
		// this.barangForm = _NG_AUTH_NG_ADMIN_FORM_.FORM_GROUP_OBJECT;
	}
}
