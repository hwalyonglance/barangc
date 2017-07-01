import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as _barangForm_ from './ng-admin-barang.form';
@Component({
	selector: 'app-ng-admin-barang-form',
	templateUrl: './ng-admin-barang-form.component.html',
	styleUrls: ['./ng-admin-barang-form.component.scss']
})
export class NgAdminBarangFormComponent {
	_FORM_ = _barangForm_;
	barangForm: FormGroup;
	constructor(private _formBuilder$$: FormBuilder) {
		this.buildBarangForm();
	}
	buildBarangForm(): void {
		this.barangForm = this._formBuilder$$.group(this._FORM_.FORM_GROUP_OBJECT_PARAM);
	}
}
