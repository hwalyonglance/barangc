import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { A11yModule, BidiModule, CdkTableModule, ObserveContentModule, PlatformModule, PortalModule } from '@angular/cdk';


import { NgRegisterRoutingModule } from './ng-register-routing.module';
import { NgUserComponent } from './Components/ng-user/ng-user.component';

@NgModule({
	imports: [
		CommonModule,
		NgRegisterRoutingModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		A11yModule, BidiModule, CdkTableModule, ObserveContentModule, PlatformModule, PortalModule
	],
	declarations: [
		NgUserComponent
	],
	exports: [
		NgUserComponent
	]
})
export class NgRegisterModule { }
