import { enableProdMode } from '@angular/core';
import { AppServerModule } from './app/app.server.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';
import { AppServerModuleNgFactory } from '../aot/src/app/app.server.module.ngfactory';
import { environment } from './environments/environment';


console.log('compiled with AOT')
	enableProdMode()

platformBrowserDynamic().bootstrapModuleFactory(AppModuleNgFactory);
