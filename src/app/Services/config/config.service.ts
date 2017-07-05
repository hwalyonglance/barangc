import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
	SocketIO = {
		host: 'localhost:3000',
		origin: 'http://localhost:3000',
	};
	constructor() { }
}
