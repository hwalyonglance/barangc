import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import * as io from 'socket.io-client/dist/socket.io.min.js';

export class NgadminPermissions {
	canActivate(): boolean {
		return true;
	}
}

@Injectable()
export class NgadminChildrenGuard implements CanActivateChild {
	_window;
	constructor(private permissions: NgadminPermissions) {
		this._window = window;
		console.log('io');
		console.log(io());
		//
	}
	canActivateChild(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		return this.permissions.canActivate();
	}
	NgadminChildrenGuard() {
	}
	connect(): void {
		// console.log(this.io);
	}
}
