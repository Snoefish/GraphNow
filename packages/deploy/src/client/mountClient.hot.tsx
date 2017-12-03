import { configureProviderHOC } from 'provider-framework/dist/client';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { setStylesTarget } from 'typestyle';
import { reducers, Client, CONFIG_FILE_PATH } from './client';

const rootEl = document.getElementById('root');
setStylesTarget(document.getElementById('styles-target') as HTMLElement);

declare global {
  // tslint:disable-next-line:interface-name
  interface NodeModule {
    hot?: {
      accept: (module: string, callback: () => void) => void;
    };
  }
}

fetch(CONFIG_FILE_PATH)
  .then(res => res.json())
  .then(config => {
    const createProviderHOC = configureProviderHOC({
      reducers,
      authenticationURL: `http://${config.AUTH_SERVER.hostname}:${config.AUTH_SERVER.port}/${
        config.AUTH_SERVER.graphqlEndpoint
      }`,
      graphqlURL: `http://${config.AUTH_SERVER.hostname}:${config.AUTH_SERVER.port}/${
        config.AUTH_SERVER.graphqlEndpoint
      }`,
      subscriptionURL: `ws://${config.AUTH_SERVER.hostname}:${config.AUTH_SERVER.port}/${
        config.AUTH_SERVER.subscriptionsEndpoint
      }`,
    });

    // tslint:disable-next-line:variable-name
    let ProviderHOC = createProviderHOC(Client);

    ReactDOM.render(
      <AppContainer>
        <ProviderHOC
          graphqlURL={`http://${config.AUTH_SERVER.hostname}:${config.AUTH_SERVER.port}/${
            config.AUTH_SERVER.graphqlEndpoint
          }`}
          subscriptionURL={`ws://${config.AUTH_SERVER.hostname}:${config.AUTH_SERVER.port}/${
            config.AUTH_SERVER.subscriptionsEndpoint
          }`}
        />
      </AppContainer>,
      rootEl,
    );

    // Hot Module Replacement API
    if (module.hot != undefined) {
      module.hot.accept('./client', async () => {
        // tslint:disable-next-line:variable-name no-require-imports
        const { Client: NextClient } = require('./client');
        ProviderHOC = createProviderHOC(NextClient);
        (ReactDOM as any).hydrate(
          <AppContainer>
            <ProviderHOC />
          </AppContainer>,
          rootEl,
        );
      });
    }
  });
