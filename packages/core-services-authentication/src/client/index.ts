import { Authentication as AuthenticationComponent } from './Components';
import { reduxConnector } from './ReduxStore';
export { setToken, clearToken, State, reducer } from './ReduxStore';
export * from './configureAuthAfterware';
export * from './configureAuthMiddleware';

export type AuthenticationExposedProps = {
  onError: (message: string) => void;
  authURL: string;
};

// tslint:disable-next-line:variable-name
export const Authentication = reduxConnector(AuthenticationComponent) as React.ComponentType<AuthenticationExposedProps>;
