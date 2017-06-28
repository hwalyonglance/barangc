import { Component } from '@angular/core';
declare var io: SocketIOStatic;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app';
	private _Socket: any;
	constructor() {
		// this._Socket = io();
		// console.log(this._Socket);
	}
}
