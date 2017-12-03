import { ApolloCache } from 'apollo-cache';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { concat, split, ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import {
  clearToken,
  configureAuthAfterware,
  configureAuthMiddleware,
  reducer as authenticationReducer,
  Authentication,
  State as AuthenticationState,
} from 'core-services-authentication/dist/client';
import { OperationDefinitionNode } from 'graphql';
import { error, reducer as notificationsReducer, NotificationSystem, State as NotificationsState } from 'notifications';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { connect, Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore, Dispatch, StoreEnhancer } from 'redux';
import { ReducersMapObject } from 'redux';
import { createLogger } from 'redux-logger';
import { autoRehydrate, persistStore } from 'redux-persist';

/** Augment global window object to attach redux dev tools */
declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export type DefaultReduxStore = {
  authentication: AuthenticationState;
  notifications: NotificationsState;
};

export type ConfigureProviderHOCConfig = {
  reducers: ReducersMapObject,
  graphqlURL: string,
  authenticationURL: string,
  subscriptionURL?: string,
};

export function configureProviderHOC(config: ConfigureProviderHOCConfig) {

  /** Configure Redux Store */
  const composeEnhancers =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ != undefined
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

  const storeEnhancers = composeEnhancers(
    applyMiddleware(createLogger({ collapsed: true })),
    autoRehydrate<DefaultReduxStore>({ log: false }),
  ) as StoreEnhancer<DefaultReduxStore>;

  const reduxStore = createStore<DefaultReduxStore>(
    combineReducers({
      ...config.reducers,
      authentication: authenticationReducer,
      notifications: notificationsReducer,
    }),
    storeEnhancers,
  );

  /** Start persisting store if we can */
  if (typeof localStorage !== 'undefined') {
    persistStore(reduxStore, {
      blacklist: ['authentication', 'notifications'], // Skip apollo and authentication data
    });
  }

  /** Configure Apollo Client */

  // Create an http link:
  let apolloLink: ApolloLink = new HttpLink({
    uri: config.graphqlURL,
  });

  // Only try to create a websocket link if we have a subscription url
  if (config.subscriptionURL != undefined) {
    // Create a WebSocket link:
    const wsLink = new WebSocketLink({
      uri: config.subscriptionURL,
      options: {
        reconnect: true,
      },
    });

    // Using the ability to split links, you can send data to each link
    // Depending on what kind of operation is being sent
    apolloLink = split(
      // Split based on operation type
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query) as OperationDefinitionNode;
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      wsLink,
      apolloLink,
    );
  }

  const authAfterware = configureAuthAfterware({ deauthenticate: () => reduxStore.dispatch(clearToken()) });
  const authMiddleware = configureAuthMiddleware({ authToken: () => reduxStore.getState().authentication.token });

  const apolloClient = new ApolloClient({
    connectToDevTools: true,
    link: authAfterware.concat(concat(authMiddleware, apolloLink)),
    // TODO: Remove this when https://github.com/apollographql/apollo-client/pull/2592 gets merged
    cache: new InMemoryCache() as ApolloCache<any>,
  });

  return function createProviderHOC(
    // tslint:disable-next-line:variable-name
    Component: React.ComponentType<{ state?: DefaultReduxStore; dispatch?: Dispatch<DefaultReduxStore>}>,
  ) {

    function mapStateToProps(state: DefaultReduxStore) {
      return {
        state,
      };
    }
    const reduxConnector = connect(mapStateToProps);

    return class ProviderHOC extends React.PureComponent<any> {
      public render(): JSX.Element {
        // tslint:disable-next-line:variable-name
        const ConnectedComponent = reduxConnector(Component as any);

        return (
          <ApolloProvider client={apolloClient}>
            <Provider store={reduxStore}>
              <div style={{ height:'100%' }}>
                <Authentication onError={(message: string) => reduxStore.dispatch(error({ message }))} authURL={config.authenticationURL}/>
                <NotificationSystem />
                <ConnectedComponent {...this.props}/>
              </div>
            </Provider>
          </ApolloProvider>
        );
      }
    };
  };
}
