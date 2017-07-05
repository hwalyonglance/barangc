import { Component, ViewChild } from '@angular/core';

@Component({
	selector: 'app-imgp',
	templateUrl: './imgp.component.html',
	styleUrls: ['./imgp.component.scss']
})
export class ImgpComponent {
	@ViewChild('imgp') imgp: any;
	constructor() {}
}
