import { Component, ViewChild } from '@angular/core';

@Component({
	selector: 'app-ng-admin-testimoni',
	templateUrl: './ng-admin-testimoni.component.html',
	styleUrls: ['./ng-admin-testimoni.component.scss']
})
export class NgAdminTestimoniComponent {
	@ViewChild('field') itf: any;
	@ViewChild('txtid') txtid: any;
	constructor() {
	}
	up() {
		const itf = this.itf;
		const txtid = this.txtid;
		setTimeout(function() {
			console.log(itf);
			console.log(itf.nativeElement.files);
			const fr = new FileReader();
			fr.onload = function (fileLoadedEvent) {
				console.log(fileLoadedEvent.target);
				txtid.nativeElement.innerHTML = fileLoadedEvent.target['result'];
				alert(fileLoadedEvent.target['result'].length);
			}
			fr.readAsDataURL(itf.nativeElement.files[0]);
		}, 5000);
	}
}
