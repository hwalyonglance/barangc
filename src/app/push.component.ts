import { Component, OnInit } from '@angular/core';
import { NgServiceWorker } from '@angular/service-worker';
// declare var io: SocketIOStatic;

@Component({
	selector: 'app-push',
	template: ''
}) 
export class PushComponent {
	constructor(
		public sw: NgServiceWorker
	) {
		sw.push.subscribe(notificationPayload => {
			// process notification data
		})
		sw.registerForPush().subsribe(subscriptionObject=> {
			// send subscription data to server
		})
	}
}
