import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgadminChildrenGuard } from './Guards/ngadmin-children/ngadmin-children.guard';

import { NgAdminComponent } from './ng-admin.component';
import { NgAdminHomeComponent } from './Components/ng-admin-home/ng-admin-home.component';
import { NgAdminNgUserComponent } from './Components/ng-admin-ng-user/ng-admin-ng-user.component';
import { NgAdminKategoriComponent } from './Components/ng-admin-kategori/ng-admin-kategori.component';
import { NgAdminBarangComponent } from './Components/ng-admin-barang/ng-admin-barang.component';
import { NgAdminTestimoniComponent } from './Components/ng-admin-testimoni/ng-admin-testimoni.component';

const ROUTES: Routes = [
	{ path: 'ngadmin', component: NgAdminComponent, canActivateChild: [NgadminChildrenGuard], children: [
		{ path: 'dashboard', component: NgAdminHomeComponent },
		{ path: 'users', component: NgAdminNgUserComponent },
		{ path: 'kategori', component: NgAdminKategoriComponent },
		{ path: 'barang', component: NgAdminBarangComponent },
		{ path: 'testimoni', component: NgAdminTestimoniComponent },
		{ path: '**', pathMatch: 'full', redirectTo: '/ngadmin/dashboard' }
	]}
];

@NgModule({
	imports: [RouterModule.forChild(ROUTES)],
	exports: [RouterModule]
})
export class NgAdminRoutingModule { }
