import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';
import 'hammerjs';
// import 'socket.io-client';
// import '../client.min';

console.log('compiled with AOT')
enableProdMode()

platformBrowserDynamic().bootstrapModuleFactory(AppModuleNgFactory);
