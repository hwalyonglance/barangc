import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { A11yModule, BidiModule, CdkTableModule, ObserveContentModule, PlatformModule, PortalModule } from '@angular/cdk';

import { NgAuthRoutingModule } from './ng-auth-routing.module';

import { NgAuthComponent } from './ng-auth.component';
import { NgAuthNavComponent } from './Components/ng-auth-nav/ng-auth-nav.component';
import { NgAuthNgadminComponent } from './Components/ng-auth-ngadmin/ng-auth-ngadmin.component';
import { NgAuthUserComponent } from './Components/ng-auth-user/ng-auth-user.component';

@NgModule({
	imports: [
		CommonModule,
		NgAuthRoutingModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		A11yModule, BidiModule, CdkTableModule, ObserveContentModule, PlatformModule, PortalModule
	],
	declarations: [
		NgAuthComponent,
		NgAuthNavComponent,
		NgAuthNgadminComponent,
		NgAuthUserComponent
	],
	exports: [
		NgAuthComponent,
		NgAuthNavComponent,
		NgAuthNgadminComponent,
		NgAuthUserComponent
	],
	providers: [],
})
export class NgAuthModule { }
