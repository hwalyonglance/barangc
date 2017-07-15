import { Component, EventEmitter, ViewChild, OnDestroy, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MdDialog } from '@angular/material';
import * as _barangForm_ from './ng-admin-barang.form';
import { FormService } from '../../../../Services/form/form.service';
import { Action } from '../../../../Types/actions';
import { Category } from '../../Interfaces/category';
import { Item } from '../../Interfaces/item';
import { ImgpComponent } from '../../../../Components/imgp/imgp.component';

import { foto as _ } from './foto';

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
	$Socket: SocketIO.Server;
	constructor(
		private __formBuilder$$: FormBuilder,
		public __mdDialog$$: MdDialog,
		private _formService: FormService,
	) {
		// this.$Socket = io(this._config.SocketIO.origin + 'data/item');
		const $this = this;
		this.barangForm = this.__formBuilder$$.group(this.FORM.FORM_GROUP_OBJECT_PARAM);
		this.barangForm.get('_id').setValue(this._formService.randomString().toLowerCase());
		this.barangForm.get('foto').setValue(_);
		this.barangForm.get('harga').valueChanges.subscribe((val) => {
			if (val < $this.FORM.RULES.harga.min) { $this.barangForm.get('harga').setValue($this.FORM.RULES.harga.min); }
			if (val > $this.FORM.RULES.harga.max) { $this.barangForm.get('harga').setValue($this.FORM.RULES.harga.max); }
		});
		this.barangForm.get('stok').valueChanges.subscribe((val) => {
			if (val < $this.FORM.RULES.stok.min) { $this.barangForm.get('stok').setValue($this.FORM.RULES.stok.min); }
			if (val > $this.FORM.RULES.stok.max) { $this.barangForm.get('stok').setValue($this.FORM.RULES.stok.max); }
		});
		this.$action$.subscribe((action: Action) => {
			if (action === 'Update') {
				$this.action = action;
				$this.barangForm.get('_id').setValue($this.$Item._id);
				$this.barangForm.get('Category').setValue($this.$Item.Category);
				$this.barangForm.get('nama').setValue($this.$Item.name);
				$this.barangForm.get('foto').setValue($this.$Item.image);
				$this.barangForm.get('harga').setValue($this.$Item.price);
				$this.barangForm.get('stok').setValue($this.$Item.stock);
				$this.barangForm.get('keterangan').setValue($this.$Item.desc);
			}
		});
	}
	ngOnDestroy() {
		// this.$Socket = null;
	}
	onSubmit(barangForm): void {
		const $Category: Category = barangForm.Category;
		let type: Action;
		const barangData: Item = {
			Category: {
				_id: $Category._id ,
				type: $Category.type,
			},
			name: barangForm.nama,
			price: barangForm.harga,
			stock: barangForm.stok,
			desc: barangForm.keterangan
		};
		this.$Socket = io('http://localhost:3000/data/item');
		if ( this.action === 'Add' ) {
			type = 'Add';
		} else {
			type = 'Update';
			barangData._id = barangForm._id
		}
		const btn = document.getElementById('btn-item');
		const SIOFU = new SocketIOFileUpload(this.$Socket);
		SIOFU.listenOnSubmit(btn, document.getElementById('itf'));
		SIOFU.addEventListener('start', function (event) {
			event.file.meta = { type: type, data: barangData };
		});
		btn.dispatchEvent(new MouseEvent('click'));
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
		const dialogRef = this.__mdDialog$$.open(ImgpComponent, {width: '400px'});
		dialogRef.componentInstance.imgp.nativeElement.src = this.foto;
		dialogRef.componentInstance.isClosed.subscribe((isClosed) => {
			if (isClosed) { dialogRef.close() }
		})
	}
	simulate() {
		document.getElementById('itf').dispatchEvent(new MouseEvent('click'))
	}
}
