import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class NgadminChildrenGuard implements CanActivateChild {
	constructor(private _router: Router) {}
	canActivateChild( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		let ngadmin: any = '';
		if ( typeof localStorage.ngadmin === 'string' ) {
			try {
				ngadmin = JSON.parse(localStorage.ngadmin);
			} catch (e) {
				this._router.navigate(['ngauth', 'ngadmin']);
			}
		}
		if ( ngadmin.hasOwnProperty('username') && ngadmin.hasOwnProperty('password') ) {
			return true;
		}
		this._router.navigate(['ngauth', 'ngadmin']);
	}
}
