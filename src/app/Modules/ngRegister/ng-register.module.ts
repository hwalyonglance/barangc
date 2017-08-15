import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { A11yModule, BidiModule, CdkTableModule, ObserveContentModule, PlatformModule, PortalModule } from '@angular/cdk';
import { FlexLayoutModule } from '../../../fx/flexbox/_module';


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
		A11yModule, BidiModule, CdkTableModule, ObserveContentModule, PlatformModule, PortalModule,
		FlexLayoutModule
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
