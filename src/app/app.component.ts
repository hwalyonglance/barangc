import { Component, OnInit } from '@angular/core';
import { NgServiceWorker } from '@angular/service-worker';
import { ApiService } from './api.service';
// declare var io: SocketIOStatic;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'app';
	data = '';
	private _Socket: any;
	constructor(
		protected apiService: ApiService,
		public sw: NgServiceWorker
	) {
		sw.update.subscribe(event => {
			if (event.type === 'pending') {
				// ask user if they want to update ?
				let agreeToUpdate = true;
				if (agreeToUpdate) {
					sw.activateUpdate(event.version)''
				}

			} else {
				// event.type === 'activation'
				// NGSW is now serving a new connection
				location.reload();
			}
		})
	}
	ngOnInit() {
		this.apiService.getData().subscribe((response) => {
				this.data = response.data;
		}, (error) => {
			this.data = 'Error with HTTP request';
		});
	}
}
