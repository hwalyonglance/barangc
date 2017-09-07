import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs';
// import 'socket.io-client';
// import '../client.min';

console.log('compiled with JIT')
if (environment.production) {
	enableProdMode()
}
platformBrowserDynamic().bootstrapModule(AppModule);
