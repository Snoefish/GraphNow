import { NotificationsState } from 'react-notification-system-redux';
import { connect } from 'react-redux';

export type ReduxStateProps = {
  notifications: NotificationsState;
};

function mapStateToProps<S extends { notifications: NotificationsState }>(state: S): ReduxStateProps {
  return {
    notifications: state.notifications,
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
export function reduxConnector<P extends (ReduxStateProps)>(
  component: React.ComponentType<P>,
): React.ComponentType<Omit<P, keyof (ReduxStateProps)>> {
  return connect<ReduxStateProps, P>(mapStateToProps)(component) as React.ComponentType<Omit<P, keyof (ReduxStateProps)>>;
}

export type Diff<T extends string, U extends string> = ({[P in T]: P } & {[P in U]: never } & { [x: string]: never })[T];
export type Omit<T, K extends keyof T> = {[P in Diff<keyof T, K>]: T[P]};
