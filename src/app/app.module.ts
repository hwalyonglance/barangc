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
import { NgAdminNavComponent } from './Modules/ngAdmin/Components/ng-admin-nav/ngadmin-nav.component';
import { NgAdminContainerComponent } from './Modules/ngAdmin/Components/ng-admin-container/ngadmin-container.component';
import { NgAdminSidenavComponent } from './Modules/ngAdmin/Components/ng-admin-sidenav/ngadmin-sidenav.component';
import { NgAdminHomeComponent } from './Modules/ngAdmin/Components/ng-admin-home/ngadmin-home.component';
import { NgAdminKategoriComponent } from './Modules/ngAdmin/Components/ng-admin-kategori/ngadmin-kategori.component';
import { NgadminKategoriFormComponent } from './Modules/ngAdmin/Components/ng-admin-kategori-form/ngadmin-kategori-form.component';
import { NgAdminKategoriDataTableComponent } from './Modules/ngAdmin/Components/ng-admin-kategori-data-table/ngadmin-kategori-data-table.component';
import { NgAdminBarangComponent } from './Modules/ngAdmin/Components/ng-admin-barang/ngadmin-barang.component';
import { NgAdminBarangFormComponent } from './Modules/ngAdmin/Components/ng-admin-barang-form/ngadmin-barang-form.component';
import { NgAdminBarangDataTableComponent } from './Modules/ngAdmin/Components/ng-admin-barang-data-table/ngadmin-barang-data-table.component';
import { NgAdminNguserComponent } from './Modules/ngAdmin/Components/ng-admin-nguser/ngadmin-nguser.component';
import { NgAdminNguserFormComponent } from './Modules/ngAdmin/Components/ng-admin-nguser-form/ngadmin-nguser-form.component';
import { NgAdminNguserDataTableComponent } from './Modules/ngAdmin/Components/ng-admin-nguser-data-table/ngadmin-nguser-data-table.component';
import { NgAdminTransaksiComponent } from './Modules/ngAdmin/Components/ng-admin-transaksi/ngadmin-transaksi.component';
import { NgAdminTransaksiDataTableComponent } from './Modules/ngAdmin/Components/ng-admin-transaksi-data-table/ngadmin-transaksi-data-table.component';

// ngauth:
import { NgAuthComponent } from './Modules/ngAuth/ng-auth.component';
import { NgAuthNgadminComponent } from './Modules/ngAuth/Components/ng-auth-ngadmin/ng-auth-ngadmin.component';
import { NgAuthUserComponent } from './Modules/ngAuth/Components/ng-auth-user/ng-auth-user.component';
import { NgAuthNavComponent } from './Modules/ngAuth/Components/ng-auth-nav/ng-auth-nav.component';
import { NgadminTestimoniComponent } from './Modules/ngAdmin/Components/ngadmin-testimoni/ngadmin-testimoni.component';
import { NgadminTestimoniDataTableComponent } from './Modules/ngAdmin/Components/ngadmin-testimoni-data-table/ngadmin-testimoni-data-table.component';


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
		NgadminKategoriFormComponent,
		NgAdminKategoriDataTableComponent,
		NgAdminBarangComponent,
		NgAdminBarangFormComponent,
		NgAdminBarangDataTableComponent,
		NgAdminNguserComponent,
		NgAdminNguserFormComponent,
		NgAdminNguserDataTableComponent,
		NgAdminTransaksiComponent,
		NgAdminTransaksiDataTableComponent,

		// NgAuth:
		NgAuthComponent,
		NgAuthNgadminComponent,
		NgAuthUserComponent,
		NgAuthNavComponent,
		NgadminTestimoniComponent,
		NgadminTestimoniDataTableComponent

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
