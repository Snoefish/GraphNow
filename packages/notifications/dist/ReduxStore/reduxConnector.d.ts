/// <reference types="react-notification-system-redux" />
/// <reference types="react" />
import { NotificationsState } from 'react-notification-system-redux';
export declare type ReduxStateProps = {
    notifications: NotificationsState;
};
/**
 * Connect Authentication component to the store
 *
 * @export
 * @template P
 * @param {React.ComponentType<P>} component
 * @returns {(React.ComponentType<Omit<P, keyof (ReduxStateProps & ReduxDispatchProps)>>)}
 */
export declare function reduxConnector<P extends (ReduxStateProps)>(component: React.ComponentType<P>): React.ComponentType<Omit<P, keyof (ReduxStateProps)>>;
export declare type Diff<T extends string, U extends string> = ({
    [P in T]: P;
} & {
    [P in U]: never;
} & {
    [x: string]: never;
})[T];
export declare type Omit<T, K extends keyof T> = {
    [P in Diff<keyof T, K>]: T[P];
};
