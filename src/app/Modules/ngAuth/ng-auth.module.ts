import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CdkTableModule } from '@angular/cdk/table';
import { A11yModule } from '@angular/cdk/a11y';
import { PlatformModule } from '@angular/cdk/platform';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';

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
		FlexLayoutModule,

		A11yModule,
		CdkTableModule,
		ObserversModule,
		PlatformModule,
		BidiModule
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
