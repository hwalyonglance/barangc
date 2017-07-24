import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { A11yModule, BidiModule, CdkTableModule, ObserveContentModule, PlatformModule, PortalModule } from '@angular/cdk';
import { FlexLayoutModule } from '../../../fx/flexbox/_module';

import { NgAdminRoutingModule } from './ng-admin-routing.module';

import { NgadminChildrenGuard } from './Guards/ngadmin-children/ngadmin-children.guard';

import { NgAdminComponent } from './ng-admin.component';
import { NgAdminNavComponent } from './Components/ng-admin-nav/ng-admin-nav.component';
import { NgAdminContainerComponent } from './Components/ng-admin-container/ng-admin-container.component';
import { NgAdminSidenavComponent } from './Components/ng-admin-sidenav/ng-admin-sidenav.component';
import { NgAdminHomeComponent } from './Components/ng-admin-home/ng-admin-home.component';
import { NgAdminKategoriComponent } from './Components/ng-admin-kategori/ng-admin-kategori.component';
import { NgAdminKategoriFormComponent } from './Components/ng-admin-kategori-form/ng-admin-kategori-form.component';
import { NgAdminKategoriDataTableComponent } from './Components/ng-admin-kategori-data-table/ng-admin-kategori-data-table.component';
import { NgAdminBarangComponent } from './Components/ng-admin-barang/ng-admin-barang.component';
import { NgAdminBarangFormComponent } from './Components/ng-admin-barang-form/ng-admin-barang-form.component';
import { NgAdminBarangDataTableComponent } from './Components/ng-admin-barang-data-table/ng-admin-barang-data-table.component';
import { NgAdminNgUserComponent } from './Components/ng-admin-ng-user/ng-admin-ng-user.component';
import { NgAdminNgUserFormComponent } from './Components/ng-admin-ng-user-form/ng-admin-ng-user-form.component';
import { NgAdminNgUserDataTableComponent } from './Components/ng-admin-ng-user-data-table/ng-admin-ng-user-data-table.component';
import { NgAdminTestimoniComponent } from './Components/ng-admin-testimoni/ng-admin-testimoni.component';
import { NgAdminTestimoniDataTableComponent } from './Components/ng-admin-testimoni-data-table/ng-admin-testimoni-data-table.component';

@NgModule({
	imports: [
		CommonModule,
		NgAdminRoutingModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		A11yModule, BidiModule, CdkTableModule, ObserveContentModule, PlatformModule, PortalModule,
		FlexLayoutModule
	],
	exports: [],
	declarations: [
		NgAdminComponent,
		NgAdminNavComponent,
		NgAdminContainerComponent,
		NgAdminSidenavComponent,
		NgAdminHomeComponent,
		NgAdminKategoriComponent,
		NgAdminKategoriFormComponent,
		NgAdminKategoriDataTableComponent,
		NgAdminBarangComponent,
		NgAdminBarangFormComponent,
		NgAdminBarangDataTableComponent,
		NgAdminNgUserComponent,
		NgAdminNgUserFormComponent,
		NgAdminNgUserDataTableComponent,
		NgAdminTestimoniComponent,
		NgAdminTestimoniDataTableComponent,
	],
	providers: [
		NgadminChildrenGuard
	],
	entryComponents: [
		NgAdminKategoriFormComponent,
		NgAdminBarangFormComponent
	]
})
export class NgAdminModule { }
