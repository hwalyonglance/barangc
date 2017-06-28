import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgadminChildrenGuard, NgadminPermissions } from './Guards/ngadmin-children/ngadmin-children.guard';

import { NgadminComponent } from './ngadmin.component';
import { NgadminHomeComponent } from './Components/ngadmin-home/ngadmin-home.component';
import { NgadminKategoriComponent } from './Components/ngadmin-kategori/ngadmin-kategori.component';

const ROUTES: Routes = [
	{ path: 'ngadmin', component: NgadminComponent, canActivateChild: [NgadminChildrenGuard], children: [
		{ path: 'dashboard', component: NgadminHomeComponent },
		{ path: 'kategori', component: NgadminKategoriComponent },
		{ path: '**', pathMatch: 'full', redirectTo: '/ngadmin/dashboard' }
	]}
];

@NgModule({
	imports: [RouterModule.forChild(ROUTES)],
	exports: [RouterModule],
	providers: [NgadminChildrenGuard, NgadminPermissions]
})
export class NgAdminRoutingModule { }
