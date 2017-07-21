import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { A11yModule, BidiModule, CdkTableModule, ObserveContentModule, PlatformModule, PortalModule } from '@angular/cdk';
// import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '../fx/flexbox/_module';

// app:
import { AppRoutingModule } from './app-routing.module';

// app-service:
import { FormService } from './Services/form/form.service';
import { CssService } from './Services/animate-css.service';

// app-pipe:
import { ExponentialPipe } from './Pipes/exponential.pipe';
import { TruncatePipe } from './Pipes/truncate.pipe';

// app-component:
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { FaIconComponent } from './Components/fa-icon/fa-icon.component';
import { ImgpComponent } from './Components/imgp/imgp.component';
import { WbrPipe } from './Pipes/wbr.pipe';

@NgModule({
	declarations: [
		ExponentialPipe,
		TruncatePipe,
		AppComponent,
		HomeComponent,
		FaIconComponent,
		ImgpComponent,

		// NgAuth:
		WbrPipe,

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
		CssService,
	],
	bootstrap: [AppComponent],
	entryComponents: [
		ImgpComponent
	]
})
export class AppModule { }
