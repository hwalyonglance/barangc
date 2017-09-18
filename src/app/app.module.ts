import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

// import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CdkTableModule } from '@angular/cdk/table';
import { A11yModule } from '@angular/cdk/a11y';
import { PlatformModule } from '@angular/cdk/platform';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';

// app:
import { AppRoutingModule } from './app-routing.module';

// app-service:
import { ApiService } from './api.service';
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

		A11yModule,
		CdkTableModule,
		ObserversModule,
		PlatformModule,
		BidiModule,

		ServiceWorkerModule,
		BrowserModule.withServerTransition({appId: 'barang#rusman'}),
		BrowserAnimationsModule,
		FormsModule,
		HttpClientModule,
		// HttpModule,
		NoopAnimationsModule,
		MaterialModule,
		ReactiveFormsModule,
		FlexLayoutModule
	],
	providers: [
		FormService,
		CssService,
		ApiService
	],
	bootstrap: [AppComponent],
	entryComponents: [
		ImgpComponent
	]
})
export class AppModule { }
