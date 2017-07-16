import { Component, OnInit, OnChanges, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as _BARANG_FORM_ from './ng-admin-kategori.form';
import { CONFIG } from '../../../../../environments/config';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Action } from '../../../../Types/actions';
import { Category } from '../../Interfaces/category';

declare var io: SocketIOStatic;
@Component({
	selector: 'app-ng-admin-kategori-form',
	templateUrl: './ng-admin-kategori-form.component.html',
	styleUrls: ['./ng-admin-kategori-form.component.scss']
})
export class NgAdminKategoriFormComponent implements OnInit, OnChanges, OnDestroy {
	@Output() $KategoriForm$ = new EventEmitter();
	FORM = _BARANG_FORM_;
	categoryForm: FormGroup;
	action: Action = 'Add';
	Category: Category | null;
	$Socket: SocketIO.Server | null;
	constructor(
		private __formBuilder$$: FormBuilder,
		private __router$$: Router
	) {
		this.$Socket = io(CONFIG.SocketIO.origin + '/data/category');
		this.categoryForm = this.__formBuilder$$.group(this.FORM.FORM_GROUP_OBJECT_PARAM);
	}
	ngOnInit() {}
	ngOnChanges() {}
	ngOnDestroy() {
		this.$Socket = null;
	}
	onSubmit(categoryForm): void {
		const Category: Category = {
			type: categoryForm.type.trim()
		};
		if (this.action === 'Add') {
			this.$Socket.emit('add', Category);
		} else {
			Category._id = this.Category._id;
			this.$Socket.emit('update', Category);
		}
		this.$KategoriForm$.next();
	}
}
