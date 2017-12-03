import { connect, Dispatch } from 'react-redux';
import { decrement as decrementAction, increment as incrementAction } from './actions';

export type ReduxStateProps = {
  counter: number;
};

function mapStateToProps<S extends { databaseManager: { counter: number } }>(state: S): ReduxStateProps {
  return {
    counter: state.databaseManager.counter,
  };
}

export type ReduxDispatchProps = {
  increment: (value: number) => void;
  decrement: (value: number) => void;
};

function mapDispatchToProps<S extends { databaseManager: { counter: number } }>(dispatch: Dispatch<S>) {
  return {
    increment: (value: number) => dispatch(incrementAction(value)),
    decrement: (value: number) => dispatch(decrementAction(value)),
  };
}
/**
 * Function to connect the database manager component to a redux store
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
