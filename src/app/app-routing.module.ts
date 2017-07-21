import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgAdminModule } from './Modules/ngAdmin/ng-admin.module';
import { NgAuthModule } from './Modules/ngAuth/ng-auth.module';
import { NgRegisterModule } from './Modules/ngRegister/ng-register.module';

import { HomeComponent } from './Components/home/home.component';

const ROUTES: Routes = [
	{ path: '', component: HomeComponent },
	{ path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(ROUTES),
		NgAdminModule,
		NgAuthModule,
		NgRegisterModule
	],
	exports: [
		RouterModule,
		NgAdminModule,
		NgAuthModule
	]
})
export class AppRoutingModule { }
