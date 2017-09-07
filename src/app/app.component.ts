import { Component } from '@angular/core';
import { ApiService } from './api.service';
// declare var io: SocketIOStatic;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app';
	data = '';
	private _Socket: any;
	constructor(protected apiService: ApiService) {}
	ngOnInit() {
		this.apiService.getData().subscribe((response) => {
				this.data = response.data;
		}, (error) => {
			this.data = 'Error with HTTP request';
		});
	}
}
