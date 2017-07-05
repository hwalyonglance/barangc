import { FormControl, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * UUID, nama, harga, foto, stok, keterangan
 */

export const RULES = {
	UUID: { label: 'UUID', type: 'text', required: true },
	categoryUUID: { label: 'Kategori', required: true},
	nama: { label: 'Nama Barang', type: 'text', required: true, minLength: 4, maxLength: 32 },
	foto: { label: 'Foto', type: 'file', required: true, maxLength: 1048576 /* 1MB = 1024 * 1024; */ },
	harga: { label: 'Harga', type: 'number', min: 500, max: 1000000000, step: 500, required: true, minLength: 1, maxLength: 10 },
	stok: { label: 'Stok', type: 'number', min: 1, max: 9999999, step: 1, required: true, minLength: 1, maxLength: 7 },
	keterangan: { label: 'Keterangan', required: false, maxLength: 1024 }
};
export const VALIDATION_MESSAGES = {
	UUID: { required: 'UUID is required.', valid: 'UUID is valid.' },
	categoryUUID: { required: 'Category is required', valid: 'Category is valid.' },
	nama: {
		valid: RULES.nama.label + ' is valid.', required: RULES.nama.label + ' is required.',
		minLength: RULES.nama.label + ' must be at least ' + RULES.nama.minLength + ' characters long.',
		maxLength: RULES.nama.label + ' cannot be more than ' + RULES.nama.maxLength + ' characters long.'
	}, foto: {
		valid: RULES.foto.label + ' is valid.', required: RULES.foto.label + ' is required.',
		maxLength: RULES.foto.label + ' cannot be more than ' + RULES.foto.maxLength + ' characters long.'
	}, harga: {
		valid: RULES.harga.label + ' is valid.', required: RULES.harga.label + ' is required.',
		minValue: RULES.harga.label + ' must be at least 500.',
		maxValue: RULES.harga.label + ' cannot be more than 1,000,000,000.'
	}, stok: {
		valid: RULES.stok.label + ' is valid.', required: RULES.stok.label + ' is required.',
		minLength: RULES.stok.label + ' must be at least ' + RULES.stok.minLength + ' characters long.',
		maxLength: RULES.stok.label + ' cannot be more than ' + RULES.stok.maxLength + ' characters long.'
	}, keterangan: {
		valid: RULES.keterangan.label + ' is valid.',
		maxLength: RULES.keterangan.label + ' cannot be more than ' + RULES.keterangan.maxLength + ' characters long.'
	}
};
export const VALIDATORS = {
	UUID: [ Validators.required ],
	categoryUUID: Validators.required,
	foto: [ Validators.required, Validators.maxLength(RULES.foto.maxLength)],
	nama: [Validators.required, Validators.minLength(RULES.nama.minLength), Validators.maxLength(RULES.nama.maxLength)],
	harga: [Validators.required],
	stok: [ Validators.required],
	keterangan: Validators.maxLength(RULES.keterangan.maxLength) ,
};
export const FORM_GROUP_OBJECT_PARAM = {
	UUID: ['', VALIDATORS.UUID],
	categoryUUID: ['', VALIDATORS.categoryUUID],
	nama: ['', VALIDATORS.nama],
	foto: ['', VALIDATORS.foto],
	harga: [500, VALIDATORS.harga],
	stok: [1, VALIDATORS.stok],
	keterangan: ['', VALIDATORS.keterangan],
	field: [null]
};
