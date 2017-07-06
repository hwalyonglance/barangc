import { Component, ViewChild, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-imgp',
	templateUrl: './imgp.component.html',
	styleUrls: ['./imgp.component.scss']
})
export class ImgpComponent {
	@ViewChild('imgp') imgp: any;
	isClosed = new EventEmitter<boolean>();
	constructor() {}
	close() {
		this.isClosed.emit(true);
	}
}
