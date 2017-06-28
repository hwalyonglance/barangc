import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgAuthRoutingModule } from './Modules/ngAuth/ng-auth-routing.module';
import { NgAdminRoutingModule } from './Modules/ngAdmin/ng-admin-routing.module';

import { HomeComponent } from './Components/home/home.component';

const ROUTES: Routes = [
	{ path: '', component: HomeComponent },
	{ path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
	imports: [
		NgAuthRoutingModule,
		NgAdminRoutingModule,
		RouterModule.forRoot(ROUTES),
	],
	exports: [
		RouterModule,
	]
})
export class AppRoutingModule { }
