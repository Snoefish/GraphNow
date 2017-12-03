import { Dropdown, Navbar } from 'core-components';
import { clearToken } from 'core-services-authentication/dist/client';
import 'core-styles/dist/styles/App.style'; // tslint:disable-line:no-import-side-effect
import { DatabaseManager, reducer as databaseManagerReducer } from 'database-manager/dist/client';
import { GraphiQL } from 'modified-graphiql';
import { error, warning } from 'notifications';
import { DefaultReduxStore } from 'provider-framework/dist/client';
import * as React from 'react';
import { Dispatch } from 'react-redux';
import { Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';

export type Props = {
  dispatch: Dispatch<DefaultReduxStore>;
  state: DefaultReduxStore;
  graphqlURL: string;
  subscriptionURL: string;
};

export const reducers = {
  databaseManager: databaseManagerReducer,
};

export const CONFIG_FILE_PATH = '/authentication.config.json';

export class Client extends React.Component<Props> {
  public componentWillMount() {
    // Add on error messages for uncaught exceptions
    if (typeof window !== 'undefined') window.addEventListener('error', e => this.props.dispatch(error({ message: e.error })));
    this.props.dispatch(warning({
      position: 'br',
      message: `Startup message`,
              }));
  }

  public render(): JSX.Element {
    const { state, dispatch } = this.props;
    return (
      <BrowserRouter>
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Navbar>
            {state.authentication.username != undefined ? <div>
              <span>Logged in as: {state.authentication.username}</span>
              <button onClick={() => dispatch(clearToken())}>Logout</button>
            </div>: undefined}
            <Dropdown dropdownStyle={{ left: 'unset', right: 0 }}>
            <Link to={'/database_manager'}>Database Manager</Link>
              <Link to={'/graphiql'}>GraphiQL</Link>
            </Dropdown>
          </Navbar>
          {state.authentication.token != undefined ?
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column'}}>
              <Route
                path={'/database_manager'}
                component={DatabaseManager}
              />
              <Route
                path={'/graphiql'}
                component={GraphiQL}
              />
            </div>
            : undefined
          }
        </div>
      </BrowserRouter>
    );
  }

  // private _errorNotification = (message: string) => {
  //   this.props.dispatch(error({ message }));
  // }
  // private _infoNotification = (message: string) => {
  //   this.props.dispatch(info({ message }));
  // }
}
