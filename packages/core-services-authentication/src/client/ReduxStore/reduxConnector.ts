import { connect, Dispatch } from 'react-redux';
import { clearToken as clearTokenAction, setToken as setTokenAction } from './actions';
import { State } from './reducer';

export type ReduxStateProps = {
  token: string | undefined;
};

function mapStateToProps<S extends { authentication: State }>(state: S): ReduxStateProps {
  return {
    token: state.authentication.token,
  };
}

export type ReduxDispatchProps = {
  setToken: (token: string) => void;
  clearToken: () => void;
};

function mapDispatchToProps<S extends { authentication: State }>(dispatch: Dispatch<S>): ReduxDispatchProps {
  return {
    setToken: (token: string) => dispatch(setTokenAction(token)),
    clearToken: () => dispatch(clearTokenAction()),
  };
}

/**
 * Connect Authentication component to the store
 *
 * @export
 * @template P
 * @param {React.ComponentType<P>} component
 * @returns {(React.ComponentType<Omit<P, keyof (ReduxStateProps & ReduxDispatchProps)>>)}
 */
export function reduxConnector<P extends (ReduxStateProps & ReduxDispatchProps)>(
  component: React.ComponentType<P>,
): React.ComponentType<Omit<P, keyof (ReduxStateProps & ReduxDispatchProps)>> {
  return connect<ReduxStateProps, ReduxDispatchProps, P>(mapStateToProps, mapDispatchToProps)(component);
}

export type Diff<T extends string, U extends string> = ({[P in T]: P } & {[P in U]: never } & { [x: string]: never })[T];
export type Omit<T, K extends keyof T> = {[P in Diff<keyof T, K>]: T[P]};
