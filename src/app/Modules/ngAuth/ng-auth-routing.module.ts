import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgAuthComponent } from './ng-auth.component';
import { NgAuthNgadminComponent } from './Components/ng-auth-ngadmin/ng-auth-ngadmin.component';
import { NgAuthUserComponent } from './Components/ng-auth-user/ng-auth-user.component';

const ROUTES: Routes = [
	{ path: 'ngauth', component: NgAuthComponent, children: [
		{ path: 'ngadmin', component: NgAuthNgadminComponent },
		{ path: 'nguser', component: NgAuthUserComponent },
		{ path: '**', pathMatch: 'full', redirectTo: '/ngauth/nguser' }
	]}
];

@NgModule({
	imports: [RouterModule.forChild(ROUTES)],
	exports: [RouterModule]
})
export class NgAuthRoutingModule { }
