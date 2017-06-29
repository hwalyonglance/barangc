import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class NgadminChildrenGuard implements CanActivateChild {
	constructor(private _router: Router) {}
	canActivateChild( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		let ___ngadmin: any = '';
		if ( typeof localStorage.ngadmin === 'string' ) {
			try {
				___ngadmin = JSON.parse(localStorage.ngadmin);
			} catch (e) {
				this._router.navigate(['ngauth', 'ngadmin']);
			}
		}
		const _LIFE_TIME_ = ___ngadmin.timestamp + 3600000; // 1 hour
		const _TIMESTAMP_ = Date.now();
		if ( _TIMESTAMP_ <= _LIFE_TIME_ ) {
			if ( ___ngadmin.hasOwnProperty('username') && ___ngadmin.hasOwnProperty('password') ) {
				return true;
			}
		}
		this._router.navigate(['ngauth', 'ngadmin']);
	}
}
