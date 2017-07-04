import { Injectable } from '@angular/core';

@Injectable()
export class FormService {
	constructor() { }
	randomString(): string {
		const a = window.btoa((Date.now() * Math.random()).toString(36)).substr(-5);
		const b = window.btoa((Date.now() * Math.random()).toString(36)).substr(-5);
		const c = window.btoa((Date.now() * Math.random()).toString(36)).substr(-5);
		const d = window.btoa((Date.now() * Math.random()).toString(36)).substr(-5);
		const e = window.btoa((Date.now() * Math.random()).toString(36)).substr(-5);
		const f = window.btoa(Date.now().toString(36));
		const retVal = (a + b + c + d + e + f).replace(/[\=]/gi, '-').toLowerCase().substr(0, 32);
		return retVal.replace(/[\/]/gi, '.');
	}
}
