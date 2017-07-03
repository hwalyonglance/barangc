import { Injectable } from '@angular/core';

@Injectable()
export class FormService {
	constructor() { }
	randomString(): string {
		const a = window.btoa((Date.now() * Math.random()).toString(36)).substr(-6);
		const b = window.btoa((Date.now() * Math.random()).toString(36)).substr(-6);
		const c = window.btoa((Date.now() * Math.random()).toString(36)).substr(-6);
		const d = window.btoa((Date.now() * Math.random()).toString(36)).substr(-6);
		const e = window.btoa((Date.now() * Math.random()).toString(36)).substr(-6);
		const f = window.btoa((Date.now() * Math.random()).toString(36)).substr(0, 6);
		const retVal = (a + b + c + d + e + f).replace(/[\=]/gi, '-').toLowerCase().substr(0, 32);
		return retVal.replace(/[\/]/gi, '.');
	}
}
