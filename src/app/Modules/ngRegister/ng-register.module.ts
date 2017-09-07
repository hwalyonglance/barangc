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


import { NgRegisterRoutingModule } from './ng-register-routing.module';
import { NgUserComponent } from './Components/ng-user/ng-user.component';
import { NgRegisterNavComponent } from './Components/ng-register-nav/ng-register-nav.component';

@NgModule({
	imports: [
		CommonModule,
		NgRegisterRoutingModule,
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
		NgUserComponent,
		NgRegisterNavComponent,
	],
	exports: [
		NgUserComponent
	]
})
export class NgRegisterModule { }
