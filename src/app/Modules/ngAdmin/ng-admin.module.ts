import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CdkTableModule } from '@angular/cdk/table';
import { A11yModule } from '@angular/cdk/a11y';
import { PlatformModule } from '@angular/cdk/platform';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';

import { NgAdminRoutingModule } from './ng-admin-routing.module';

import { NgadminChildrenGuard } from './Guards/ngadmin-children/ngadmin-children.guard';

import { NgAdminComponent } from './ng-admin.component';
import { NgAdminNavComponent } from './Components/ng-admin-nav/ng-admin-nav.component';
import { NgAdminHomeComponent } from './Components/ng-admin-home/ng-admin-home.component';
import { NgAdminContainerComponent } from './Components/ng-admin-container/ng-admin-container.component';
import { NgAdminSidenavComponent } from './Components/ng-admin-sidenav/ng-admin-sidenav.component';
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
import { RpComponent } from './Components/rp/rp.component';

@NgModule({
	imports: [
		CommonModule,
		NgAdminRoutingModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		FlexLayoutModule,

		CdkTableModule,
		A11yModule,
		CdkTableModule,
		ObserversModule,
		PlatformModule,
		BidiModule
	],
	exports: [],
	declarations: [
		NgAdminComponent,
		NgAdminNavComponent,
		NgAdminHomeComponent,
		NgAdminContainerComponent,
		NgAdminSidenavComponent,
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
		RpComponent,
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
