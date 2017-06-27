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

// ngauth:
import { NgAuthNgadminComponent } from './Modules/ngAuth/Components/ng-auth-ngadmin/ng-auth-ngadmin.component';
import { NgAuthUserComponent } from './Modules/ngAuth/Components/ng-auth-user/ng-auth-user.component';

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

		// NgAuth:
		NgAuthNgadminComponent,
		NgAuthUserComponent
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
