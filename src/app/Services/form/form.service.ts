import { Injectable } from '@angular/core';

@Injectable()
export class FormService {
	constructor() { }
	randomString(): string {
		const a = window.btoa((Date.now() * Math.random()).toString(36));
		const b = window.btoa((Date.now() * Math.random()).toString(36));
		const c = window.btoa((Date.now() * Math.random()).toString(36));
		return (a + b).replace(/[\/\=]/gi, '');
	}
}
