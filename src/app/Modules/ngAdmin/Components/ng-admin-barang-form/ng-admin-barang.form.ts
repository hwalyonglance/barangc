import { FormControl, FormGroup, Validators } from '@angular/forms';

/**
 * UUID, nama, harga, foto, stok, keterangan
 */

export const RULES = {
	UUID: { label: 'UUID', type: 'text', required: true },
	name: { label: 'Nama Barang', type: 'text', required: true, minLength: 4, maxLength: 32 },
	foto: { label: 'Foto', type: 'file', required: true, minLength: 1, maxLength: 32 },
	harga: { label: 'Harga', type: 'number', min: 500, max: 1000000000, step: 500, required: true, minLength: 1, maxLength: 10 },
	stok: { label: 'Stok', type: 'number', min: 1, max: 9999999, step: 1, required: true, minLength: 1, maxLength: 7 },
	keterangan: { label: 'Keterangan', required: false, minLength: 1, maxLength: 32 }
};
export const VALIDATION_MESSAGES = {
	UUID: { required: 'UUID is required.', valid: 'UUID is valid.' },
	name: {
		valid: RULES.name.label + ' is valid.', required: RULES.name.label + ' is required.',
		minLength: RULES.name.label + ' must be at least ' + RULES.name.minLength + ' characters long.',
		maxLength: RULES.name.label + ' cannot be more than ' + RULES.name.maxLength + ' characters long.'
	}, foto: {
		valid: RULES.foto.label + ' is valid.', required: RULES.foto.label + ' is required.',
		minLength: RULES.foto.label + ' must be at least ' + RULES.foto.minLength + ' characters long.',
		maxLength: RULES.foto.label + ' cannot be more than ' + RULES.foto.maxLength + ' characters long.'
	}, harga: {
		valid: RULES.harga.label + ' is valid.', required: RULES.harga.label + ' is required.',
		minLength: RULES.harga.label + ' must be at least ' + RULES.harga.minLength + ' characters long.',
		maxLength: RULES.harga.label + ' cannot be more than ' + RULES.harga.maxLength + ' characters long.'
	}, stok: {
		valid: RULES.stok.label + ' is valid.', required: RULES.stok.label + ' is required.',
		minLength: RULES.stok.label + ' must be at least ' + RULES.stok.minLength + ' characters long.',
		maxLength: RULES.stok.label + ' cannot be more than ' + RULES.stok.maxLength + ' characters long.'
	}, keterangan: {
		valid: RULES.keterangan.label + ' is valid.', required: RULES.keterangan.label + ' is required.',
		minLength: RULES.keterangan.label + ' must be at least ' + RULES.keterangan.minLength + ' characters long.',
		maxLength: RULES.keterangan.label + ' cannot be more than ' + RULES.keterangan.maxLength + ' characters long.'
	}
};
export const VALIDATORS = {
	UUID: [ Validators.required ],
	foto: [ Validators.required, Validators.minLength(RULES.foto.minLength), Validators.maxLength(RULES.foto.maxLength)],
	name: [ Validators.required, Validators.minLength(RULES.name.minLength), Validators.maxLength(RULES.name.maxLength)],
	harga:  [Validators.required, Validators.minLength(RULES.harga.minLength), Validators.maxLength(RULES.harga.maxLength) ],
	stok: [ Validators.required, Validators.minLength(RULES.stok.minLength), Validators.maxLength(RULES.stok.maxLength)],
	keterangan: [ Validators.minLength(RULES.keterangan.minLength), Validators.maxLength(RULES.keterangan.maxLength) ],
};
export function randomString(): string {
	return window.btoa((Date.now() * Math.random() * Math.random() * Math.random() * Math.random() * Math.random()).toString());
}
export const FORM_GROUP_OBJECT_PARAM = {
	UUID: [randomString(), VALIDATORS.UUID],
	name: ['', VALIDATORS.name],
	foto: ['', VALIDATORS.foto],
	harga: [500, VALIDATORS.harga],
	stok: [1, VALIDATORS.stok],
	keterangan: ['', VALIDATORS.keterangan],
};
