import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as _barangForm_ from './ng-admin-barang.form';

import { FormService } from '../../../../Services/form/form.service';
@Component({
	selector: 'app-ng-admin-barang-form',
	templateUrl: './ng-admin-barang-form.component.html',
	styleUrls: ['./ng-admin-barang-form.component.scss']
})
export class NgAdminBarangFormComponent {
	_FORM_ = _barangForm_;
	barangForm: FormGroup;
	type = 'Tambah';
	constructor(private __formBuilder$$: FormBuilder, private  _formService: FormService) {
		this.buildBarangForm();
	}
	buildBarangForm(): void {
		this.barangForm = this.__formBuilder$$.group(this._FORM_.FORM_GROUP_OBJECT_PARAM);
		this.barangForm.patchValue({
			UUID: this._formService.randomString().toLowerCase()
		});
		console.log(this._formService.randomString().toLowerCase());
		console.log(this._formService.randomString().length);
	}
	onSubmit(__barangForm: FormGroup): void {
		const barangData = {
			barang_uuid: __barangForm.get('UUID').value,
			user_uuid: window.localStorage.ngadmin,
			barang_nama: __barangForm.get('nama').value,
			barang_harga: __barangForm.get('harga').value,
			barang_stok: __barangForm.get('stok').value,
			barang_keterangan: __barangForm.get('keterangan').value
		};
		console.log(barangData);
	}
}
