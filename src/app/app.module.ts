import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { A11yModule, BidiModule, CdkTableModule, ObserveContentModule, PlatformModule, PortalModule } from '@angular/cdk';
// import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// app:
import { AppRoutingModule } from './app-routing.module';

// app-service:
import { FormService } from './Services/form/form.service';
import { ConfigService } from './Services/config/config.service';
import { RedirectService } from './Services/redirect/redirect.service';
import { CSSService } from './Services/css.service';

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
import { NgAdminTestimoniComponent } from './Modules/ngAdmin/Components/ng-admin-testimoni/ng-admin-testimoni.component';
import { NgAdminTestimoniDataTableComponent } from './Modules/ngAdmin/Components/ng-admin-testimoni-data-table/ng-admin-testimoni-data-table.component';


// ngauth:
import { NgAuthComponent } from './Modules/ngAuth/ng-auth.component';
import { NgAuthNgadminComponent } from './Modules/ngAuth/Components/ng-auth-ngadmin/ng-auth-ngadmin.component';
import { NgAuthUserComponent } from './Modules/ngAuth/Components/ng-auth-user/ng-auth-user.component';
import { NgAuthNavComponent } from './Modules/ngAuth/Components/ng-auth-nav/ng-auth-nav.component';
import { SocketComponent } from './Components/socket/socket.component';
import { ImgpComponent } from './Components/imgp/imgp.component';




@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		FaIconComponent,
		SocketComponent,
		ImgpComponent,

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
		NgAdminTestimoniComponent,
		NgAdminTestimoniDataTableComponent,

		// NgAuth:
		NgAuthComponent,
		NgAuthNgadminComponent,
		NgAuthUserComponent,
		NgAuthNavComponent,

	],
	imports: [
		AppRoutingModule,

		BrowserModule.withServerTransition({appId: 'barang#rusman'}),
		BrowserAnimationsModule,
		FormsModule,
		// HttpModule,
		NoopAnimationsModule,
		MaterialModule,
		ReactiveFormsModule,
		FlexLayoutModule,
		A11yModule, BidiModule, CdkTableModule, ObserveContentModule, PlatformModule, PortalModule
	],
	providers: [
		FormService,
		ConfigService,
		CSSService,
		RedirectService,
		NgadminChildrenGuard
	],
	bootstrap: [AppComponent],
	entryComponents: [
		ImgpComponent,
		NgAdminKategoriFormComponent,
		NgAdminBarangFormComponent
	]
})
export class AppModule { }
