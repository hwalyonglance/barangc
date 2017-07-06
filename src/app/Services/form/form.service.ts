import { Injectable } from '@angular/core';

@Injectable()
export class FormService {
	constructor() { }
	randomString(): string {
		const a = Date.now().toString(36);
		const b = (Date.now() * Math.random()).toString(36).substr(-5);
		const c = (Date.now() * Math.random()).toString(36).substr(-5);
		const d = (Date.now() * Math.random()).toString(36).substr(-5);
		const e = (Date.now() * Math.random()).toString(36).substr(-5);
		const retVal = (a + b + c + d + e).replace(/[\=]/gi, '-').toLowerCase().substr(0, 32);
		return retVal.replace(/[\/]/gi, '.');
	}
}
