import { Component, EventEmitter, ViewChild, OnDestroy, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MdDialog } from '@angular/material';
import { CONFIG } from '../../../../../environments/config';
import * as _barangForm_ from './ng-admin-barang.form';
import { Action } from '../../../../Types/actions';
import { Category } from '../../Interfaces/category';
import { Item } from '../../Interfaces/item';
import { ImgpComponent } from '../../../../Components/imgp/imgp.component';

import { foto as _ } from './foto';

import { SocketIOStatic, Server } from '../../../../Interfaces/socket.io';
declare var io: SocketIOStatic;
declare var SocketIOFileUpload: any;
@Component({
	selector: 'app-ng-admin-barang-form',
	templateUrl: './ng-admin-barang-form.component.html',
	styleUrls: ['./ng-admin-barang-form.component.scss']
})
export class NgAdminBarangFormComponent implements OnDestroy {
	@Output() $submit$ = new EventEmitter();
	@Output() $action$ = new EventEmitter<Action>();
	@ViewChild('itf') itf: any;
	@ViewChild('imgp') imgp: any;
	FORM = _barangForm_;
	barangForm: FormGroup;
	foto = _;
	action: Action = 'Add';
	$Categories: Category[] | null;
	$Item: Item | null;
	$Socket: Server;
	constructor(
		private __formBuilder$$: FormBuilder,
		public __mdDialog$$: MdDialog,
	) {
		this.barangForm = this.__formBuilder$$.group(this.FORM.FORM_GROUP_OBJECT_PARAM);
		this.barangForm.get('foto').setValue(_);
		this.barangForm.get('harga').valueChanges.subscribe((val) => {
			if (val < this.FORM.RULES.harga.min) { this.barangForm.get('harga').setValue(this.FORM.RULES.harga.min); }
			if (val > this.FORM.RULES.harga.max) { this.barangForm.get('harga').setValue(this.FORM.RULES.harga.max); }
		});
		this.barangForm.get('stok').valueChanges.subscribe((val) => {
			if (val < this.FORM.RULES.stok.min) { this.barangForm.get('stok').setValue(this.FORM.RULES.stok.min); }
			if (val > this.FORM.RULES.stok.max) { this.barangForm.get('stok').setValue(this.FORM.RULES.stok.max); }
		});
		this.$action$.subscribe((action: Action) => {
			if (action === 'Update') {
				const foto = CONFIG.SocketIO.origin + '/uploads/items/' + this.$Item.image;
				this.action = action;
				this.barangForm.get('_id').setValue(this.$Item._id);
				this.barangForm.get('Category').setValue(JSON.stringify(this.$Item.Category));
				this.barangForm.get('nama').setValue(this.$Item.name);
				this.barangForm.get('foto').setValue(foto);
				this.foto = foto;
				this.barangForm.get('harga').setValue(this.$Item.price);
				this.barangForm.get('stok').setValue(this.$Item.stock);
				this.barangForm.get('keterangan').setValue(this.$Item.desc);
			}
		});
	}
	ngOnDestroy() {
		this.$Socket = null;
	}
	onSubmit(barangForm): void {
		const $Category: Category = JSON.parse(barangForm.Category);
		let type: Action;
		const data: Item = {
			Category: {
				_id: $Category._id ,
				type: $Category.type,
			},
			name: barangForm.nama,
			price: barangForm.harga,
			stock: barangForm.stok,
			desc: barangForm.keterangan
		};
		this.$Socket = io(CONFIG.SocketIO.origin + '/data/item');
		if ( this.action === 'Add' ) {
			type = 'Add';
		} else {
			type = 'Update';
			data._id = barangForm._id
			alert(barangForm._id);
		}
		const btn = document.createElement('button');
		const itf: any = document.getElementById('itf');
		const sentData = { type, data };
		console.log(sentData)
		if ( itf.files[0] ) {
			const SIOFU = new SocketIOFileUpload(this.$Socket);
			SIOFU.listenOnSubmit(btn, itf);
			SIOFU.addEventListener('start', function (event) {
				event.file.meta = sentData;
			});
			btn.dispatchEvent(new MouseEvent('click'));
		} else {
			this.$Socket.emit('update', sentData);
		}
		this.$Socket = null;
		this.$submit$.next();
	}
	onKeyPress($event: KeyboardEvent): void {
		const number = ($event.keyCode >= 48) && ($event.keyCode <= 57);
		if (!number) {
			$event.preventDefault();
		}
	}
	file(): void {
		const $this = this;
		const files = this.itf.nativeElement.files;
		const fr = new FileReader();
		fr.onload = function ($event) {
			$this.foto = $event.target['result'];
		}
		if (files[0]) {
			fr.readAsDataURL(files[0]);
		}
	}
	view(): void {
		const dialogRef = this.__mdDialog$$.open(ImgpComponent);
		dialogRef.componentInstance.imgp.nativeElement.src = this.foto;
		dialogRef.componentInstance.isClosed.subscribe((isClosed) => {
			if (isClosed) { dialogRef.close() }
		});
	}
	type_of() {
		return this.action === 'Add' ? typeof this.itf.nativeElement.files[0] === 'undefined' : false;
	}
	exist() {
		return typeof this.itf.nativeElement.files[0] === 'object' ? true : false ;
	}
	simulate() {
		document.getElementById('itf').dispatchEvent(new MouseEvent('click'))
	}
	toString(Category: Category) {
		return JSON.stringify(Category);
	}
}
