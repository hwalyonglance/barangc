import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import { AppServerModuleNgFactory } from '../aot/src/app/app.server.module.ngfactory';
// import { AppModuleNgFactory } from './app/app.module.ngfactory';
import * as express from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';

const PORT = 3200;

enableProdMode();

const app = express();

const template = readFileSync(join(__dirname, '..', 'dist', 'index.html')).toString();

app.engine('html', (_: any, options: any, callback: any) => {
	const opts = {document: template, url: options.req.url};

	renderModuleFactory(AppServerModuleNgFactory, opts)
		.then(html => callback(null, html));
});

app.set('view engine', 'html');
app.set('views', join(__dirname, '..', 'src'));

app.get('*.*', express.static(join(__dirname, '..', 'dist')));

app.get('*', (req: any, res: any) => {
	res.render('index', { req });
});

app.listen(PORT, () => {
	console.log('Server listening on http://localhost:' + PORT);
});
