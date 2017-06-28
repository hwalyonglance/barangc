import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { FaIconComponent } from './Components/fa-icon/fa-icon.component';

// ngadmin:
import { NgadminComponent } from './Modules/ngAdmin/ngadmin.component';
import { NgadminNavComponent } from './Modules/ngAdmin/Components/ngadmin-nav/ngadmin-nav.component';
import { NgadminContainerComponent } from './Modules/ngAdmin/Components/ngadmin-container/ngadmin-container.component';
import { NgadminSidenavComponent } from './Modules/ngAdmin/Components/ngadmin-sidenav/ngadmin-sidenav.component';
import { NgadminHomeComponent } from './Modules/ngAdmin/Components/ngadmin-home/ngadmin-home.component';
import { NgadminKategoriComponent } from './Modules/ngAdmin/Components/ngadmin-kategori/ngadmin-kategori.component';
import { NgadminKategoriFormComponent } from './Modules/ngAdmin/Components/ngadmin-kategori-form/ngadmin-kategori-form.component';
import { NgadminKategoriDataTableComponent } from './Modules/ngAdmin/Components/ngadmin-kategori-data-table/ngadmin-kategori-data-table.component';
import { NgadminBarangComponent } from './Modules/ngAdmin/Components/ngadmin-barang/ngadmin-barang.component';
import { NgadminBarangFormComponent } from './Modules/ngAdmin/Components/ngadmin-barang-form/ngadmin-barang-form.component';
import { NgadminBarangDataTableComponent } from './Modules/ngAdmin/Components/ngadmin-barang-data-table/ngadmin-barang-data-table.component';

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
		NgadminComponent,
		NgadminNavComponent,
		NgadminContainerComponent,
		NgadminSidenavComponent,
		NgadminHomeComponent,
		NgadminKategoriComponent,
		NgadminKategoriFormComponent,
		NgadminKategoriDataTableComponent,
		NgadminBarangComponent,
		NgadminBarangFormComponent,
		NgadminBarangDataTableComponent,

		// NgAuth:
		NgAuthComponent,
		NgAuthNgadminComponent,
		NgAuthUserComponent,
		NgAuthNavComponent
	],
	imports: [
		AppRoutingModule,

		BrowserModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
		FormsModule,
		HttpModule,
		MaterialModule,
		NoopAnimationsModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
