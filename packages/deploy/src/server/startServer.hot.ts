import { HttpLink } from 'apollo-link-http';
import { readFileSync } from 'fs';
import { introspectSchema, makeRemoteExecutableSchema } from 'graphql-tools';
import { createServer } from 'http';
import * as path from 'path';
import { configureApp } from 'provider-framework/dist/server';

const config = JSON.parse(readFileSync(path.resolve(__dirname, '../../config/http.config.json')).toString());

declare global {
  interface NodeModule { // tslint:disable-line:interface-name
    hot?: {
      accept: (module: string, callback: () => void) => void;
    };
  }
}

async function startAuthenticationServer() {

  const server = createServer();

  const html = `
    <!doctype html>
    ${module.hot != undefined ?
      `<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>`
      :
      `<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>`
    }
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ramda/0.24.1/ramda.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js"></script>
    <style id="styles-target"></style>
    <html>
      <head>
        <title>Authentication</title>
      </head>
      <body>
        <div id="root" style="height: 100%;"></div>

        <script src="${module.hot != undefined ? 'http://localhost:3005/client.js' : '/client.js'}"></script>
      </body>
    </html>
  `;

  // tslint:disable-next-line:no-require-imports
  const { configureGraphql } = require('./graphqlConfig');

  const { resolvers, schemas } = await configureGraphql();

  // Step 1: Create local version of the CRUD API
  const endpoint = 'http://localhost:60000/simple/v1/cjapptdzb00040160sf97d2jg';
  const link = new HttpLink({ uri: endpoint, fetch });
  const graphcoolSchema = makeRemoteExecutableSchema({
    schema: await introspectSchema(link),
    link,
  });

  let requestHandler = configureApp({
    graphqlConfig: { resolvers, schemas },
    server,
    graphqlEndpoint: config.AUTH_SERVER.graphqlEndpoint,
    subscriptionsEndpoint: config.AUTH_SERVER.subscriptionsEndpoint,
    authURL: `http://${config.AUTH_SERVER.hostname}:${config.AUTH_SERVER.port}/${config.AUTH_SERVER.graphqlEndpoint}`,
    renderHTML: html,
    staticPaths: [`${__dirname}/../client`, `${__dirname}/../../public/authentication`],
    mergeSchemas: [graphcoolSchema],
  });

  server.on('request', requestHandler);

  if (module.hot != undefined ) {
    module.hot.accept('./graphqlConfig', async () => {
      // tslint:disable-next-line:no-require-imports
      const { configureGraphql: newConfigureGraphql } = require('./graphqlConfig');

      const { resolvers: newResolvers, schemas: newSchemas } = await newConfigureGraphql();

      server.removeListener('request', requestHandler);
      requestHandler = configureApp({
        graphqlConfig: { resolvers: newResolvers, schemas: newSchemas },
        server,
        graphqlEndpoint: config.AUTH_SERVER.graphqlEndpoint,
        subscriptionsEndpoint: config.AUTH_SERVER.subscriptionsEndpoint,
        authURL: `http://${config.AUTH_SERVER.hostname}:${config.AUTH_SERVER.port}/${config.AUTH_SERVER.graphqlEndpoint}`,
        renderHTML: html,
        staticPaths: [`${__dirname}/../client`, `${__dirname}/../../public/authentication`],
        mergeSchemas: [graphcoolSchema],
      });

      server.on('request', requestHandler);
    });
  }

  server.listen(config.AUTH_SERVER.port, () => {
    console.log(`Listening on port ${config.AUTH_SERVER.port}.`);
  });
}

startAuthenticationServer();
