import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import 'hammerjs';

// app:
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { FaIconComponent } from './Components/fa-icon/fa-icon.component';

// ngadmin:
import { NgadminChildrenGuard } from './Modules/ngAdmin/Guards/ngadmin-children/ngadmin-children.guard';

import { NgAdminComponent } from './Modules/ngAdmin/ng-admin.component';
import { NgAdminNavComponent } from './Modules/ngAdmin/Components/ng-admin-nav/ng-admin-nav.component';
import { NgAdminContainerComponent } from './Modules/ngAdmin/Components/ng-admin-container/ng-admin-container.component';
import { NgAdminSidenavComponent } from './Modules/ngAdmin/Components/ng-admin-sidenav/ng-admin-sidenav.component';
import { NgAdminHomeComponent } from './Modules/ngAdmin/Components/ng-admin-home/ng-admin-home.component';
import { NgAdminKategoriComponent } from './Modules/ngAdmin/Components/ng-admin-kategori/ng-admin-kategori.component';
import { NgAdminKategoriFormComponent } from './Modules/ngAdmin/Components/ng-admin-kategori-form/ng-admin-kategori-form.component';
import { NgAdminKategoriDataTableComponent } from './Modules/ngAdmin/Components/ng-admin-kategori-data-table/ng-admin-kategori-data-table.component';
import { NgAdminBarangComponent } from './Modules/ngAdmin/Components/ng-admin-barang/ng-admin-barang.component';
import { NgAdminBarangFormComponent } from './Modules/ngAdmin/Components/ng-admin-barang-form/ng-admin-barang-form.component';
import { NgAdminBarangDataTableComponent } from './Modules/ngAdmin/Components/ng-admin-barang-data-table/ng-admin-barang-data-table.component';
import { NgAdminNgUserComponent } from './Modules/ngAdmin/Components/ng-admin-ng-user/ng-admin-ng-user.component';
import { NgAdminNgUserFormComponent } from './Modules/ngAdmin/Components/ng-admin-ng-user-form/ng-admin-ng-user-form.component';
import { NgAdminNgUserDataTableComponent } from './Modules/ngAdmin/Components/ng-admin-ng-user-data-table/ng-admin-ng-user-data-table.component';
import { NgAdminTransaksiComponent } from './Modules/ngAdmin/Components/ng-admin-transaksi/ng-admin-transaksi.component';
import { NgAdminTransaksiDataTableComponent } from './Modules/ngAdmin/Components/ng-admin-transaksi-data-table/ng-admin-transaksi-data-table.component';
import { NgAdminTestimoniComponent } from './Modules/ngAdmin/Components/ng-admin-testimoni/ng-admin-testimoni.component';
import { NgAdminTestimoniDataTableComponent } from './Modules/ngAdmin/Components/ng-admin-testimoni-data-table/ng-admin-testimoni-data-table.component';


// ngauth:
import { NgAuthComponent } from './Modules/ngAuth/ng-auth.component';
import { NgAuthNgadminComponent } from './Modules/ngAuth/Components/ng-auth-ngadmin/ng-auth-ngadmin.component';
import { NgAuthUserComponent } from './Modules/ngAuth/Components/ng-auth-user/ng-auth-user.component';
import { NgAuthNavComponent } from './Modules/ngAuth/Components/ng-auth-nav/ng-auth-nav.component';



@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		FaIconComponent,

		// NgaAdmin:
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
		NgAdminTransaksiComponent,
		NgAdminTransaksiDataTableComponent,

		// NgAuth:
		NgAuthComponent,
		NgAuthNgadminComponent,
		NgAuthUserComponent,
		NgAuthNavComponent,
		NgAdminTestimoniComponent,
		NgAdminTestimoniDataTableComponent

	],
	imports: [
		AppRoutingModule,

		BrowserModule,
		BrowserAnimationsModule,
		// FlexLayoutModule,
		FormsModule,
		// HttpModule,
		MaterialModule,
		NoopAnimationsModule,
		ReactiveFormsModule
	],
	providers: [NgadminChildrenGuard],
	bootstrap: [AppComponent],
})
export class AppModule { }
