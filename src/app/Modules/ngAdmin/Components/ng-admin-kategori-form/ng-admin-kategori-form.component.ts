import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as _BARANG_FORM_ from './ng-admin-kategori.form';
import { FormService } from '../../../../Services/form/form.service';
import { ConfigService } from '../../../../Services/config/config.service';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Action } from '../../../../Types/actions';
import { Category } from '../../../../Classes/category';


declare var io: any;
@Component({
	selector: 'app-ng-admin-kategori-form',
	templateUrl: './ng-admin-kategori-form.component.html',
	styleUrls: ['./ng-admin-kategori-form.component.scss']
})
export class NgAdminKategoriFormComponent implements OnInit, OnChanges {
	@Output() $KategoriForm$ = new EventEmitter();
	FORM = _BARANG_FORM_;
	categoryForm: FormGroup;
	action: Action = 'Add';
	Category: Category | null = new Category();
	private $Socket = io(this.__configService.SocketIO.origin);
	constructor(
		private __formBuilder$$: FormBuilder,
		private __router$$: Router,
		private _formService: FormService,
		private __configService: ConfigService,
	) {
		this.categoryForm = this.__formBuilder$$.group(this.FORM.FORM_GROUP_OBJECT_PARAM);
		this.categoryForm.patchValue({
			UUID: this._formService.randomString()
		});
	}
	ngOnInit() {}
	ngOnChanges() {}
	onSubmit({ UUID, categoryName}): void {
		if (this.action === 'Add') {
			this.$Socket.emit('Category.Form.add', {
				UUID: UUID.value,
				categoryName: categoryName.value.trim()
			});
		} else {
			this.$Socket.emit('Category.Form.update', {
				UUID: this.Category.UUID,
				categoryName: categoryName.value.trim()
			});
		}
		this.$KategoriForm$.next();
	}
}
