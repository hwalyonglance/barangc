import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as _BARANG_FORM_ from './ng-admin-kategori.form';
import { FormService } from '../../../../Services/form/form.service';
import { ConfigService } from '../../../../Services/config/config.service';

declare var io: any;
@Component({
	selector: 'app-ng-admin-kategori-form',
	templateUrl: './ng-admin-kategori-form.component.html',
	styleUrls: ['./ng-admin-kategori-form.component.scss']
})
export class NgAdminKategoriFormComponent {
	@Output() $KategoriForm$ = new EventEmitter();
	_FORM_ = _BARANG_FORM_;
	categoryForm: FormGroup;
	type = 'Tambah';
	private Socket_Kategori = io(this.__configService.SocketIO.origin);
	constructor(private __formBuilder$$: FormBuilder, private __router$$: Router, private _formService: FormService, private __configService: ConfigService) {
		this.categoryForm = this.__formBuilder$$.group(this._FORM_.FORM_GROUP_OBJECT_PARAM);
		this.categoryForm.patchValue({
			UUID: this._formService.randomString()
		});
	}
	onSubmit(controls): void {
		const KATEGORI = {
			UUID: controls.UUID.value,
			categoryName: controls.categoryName.value.trim()
		};
		this.Socket_Kategori.emit('Category.Form.add', KATEGORI);
		this.$KategoriForm$.next();
		this.clearForm();
	}
	clearForm(): void {
		this.categoryForm.reset({
			UUID: this._formService.randomString(),
			categoryName: ' '
		});
	}
}
