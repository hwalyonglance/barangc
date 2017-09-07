import {applicationBuilderFromModule} from 'angular-ssr';
import {join} from 'path';
import {AppModule} from './src/app/app.module';
import express = require('express');
import url = require('url');

const dist = join(process.cwd(), 'dist');

const builder = applicationBuilderFromModule<AppModule>(AppModule, join(dist, 'index.html'));

const application = builder.build();

const http = express();

http.get(/.*/, async (request, response) => {
  try {
    const snapshot = await application.renderUri(absoluteUri(req));

    response.send(snapshot.renderedDocument);
  }
  catch (exception) {
    response.send(builder.templateDocument()); // fall back on client document
  }
});

http.listen(process.env.PORT);

const absoluteUri = (request: express.Request): string => {
  return url.format({
    protocol: request.protocol,
    host: request.get('host'),
    pathname: request.originalUrl
  });
};