import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgadminRoutingModule } from './Modules/ngAdmin/ngadmin-routing.module';

import { HomeComponent } from './Components/home/home.component';

const ROUTES: Routes = [
	{ path: '', component: HomeComponent },
	{ path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
	imports: [
		NgadminRoutingModule,
		RouterModule.forRoot(ROUTES),
	],
	exports: [
		RouterModule,
	]
})
export class AppRoutingModule { }
