import { FormControl, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * UUID, nama, harga, foto, stok, keterangan
 */

export const RULES = {
	UUID: { label: 'UUID', type: 'text', required: true },
	Category: { label: 'Kategori', required: true},
	nama: { label: 'Nama Barang', type: 'text', required: true, minLength: 4, maxLength: 32 },
	foto: { label: 'Foto', type: 'file', required: true, maxLength: 1073741824 /* 10 MB  */ },
	harga: { label: 'Harga', type: 'number', min: 500, max: 1000000, step: 500, required: true },
	stok: { label: 'Stok', type: 'number', min: 1, max: 9999, step: 1, required: true },
	keterangan: { label: 'Keterangan', required: false, maxLength: 256 }
};
export const VALIDATION_MESSAGES = {
	UUID: { required: 'UUID is required.' },
	Category: { required: 'Category is required' },
	nama: {
		required: RULES.nama.label + ' is required.',
		minLength: RULES.nama.label + ' must be at least ' + RULES.nama.minLength + ' characters long.',
		maxLength: RULES.nama.label + ' cannot be more than ' + RULES.nama.maxLength + ' characters long.'
	}, foto: {
		required: RULES.foto.label + ' is required.',
		maxLength: RULES.foto.label + ' cannot be more than ' + RULES.foto.maxLength + ' characters long.'
	}, harga: {
		required: RULES.harga.label + ' is required.',
	}, stok: {
		required: RULES.stok.label + ' is required.',
	}, keterangan: {
		maxLength: RULES.keterangan.label + ' cannot be more than ' + RULES.keterangan.maxLength + ' characters long.'
	}
};
export const VALIDATORS = {
	UUID: [ Validators.required ],
	Category: Validators.required,
	foto: [ Validators.required, Validators.maxLength(RULES.foto.maxLength)],
	nama: [Validators.required, Validators.minLength(RULES.nama.minLength), Validators.maxLength(RULES.nama.maxLength)],
	harga: [Validators.required],
	stok: [ Validators.required],
	keterangan: Validators.maxLength(RULES.keterangan.maxLength) ,
};
export const FORM_GROUP_OBJECT_PARAM = {
	UUID: ['', VALIDATORS.UUID],
	Category: ['', VALIDATORS.Category],
	nama: ['', VALIDATORS.nama],
	foto: ['', VALIDATORS.foto],
	harga: [500, VALIDATORS.harga],
	stok: [1, VALIDATORS.stok],
	keterangan: ['', VALIDATORS.keterangan],
	field: [null]
};
