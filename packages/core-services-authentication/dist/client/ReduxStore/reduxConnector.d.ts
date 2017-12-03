/// <reference types="react" />
export declare type ReduxStateProps = {
    token: string | undefined;
};
export declare type ReduxDispatchProps = {
    setToken: (token: string) => void;
    clearToken: () => void;
};
/**
 * Connect Authentication component to the store
 *
 * @export
 * @template P
 * @param {React.ComponentType<P>} component
 * @returns {(React.ComponentType<Omit<P, keyof (ReduxStateProps & ReduxDispatchProps)>>)}
 */
export declare function reduxConnector<P extends (ReduxStateProps & ReduxDispatchProps)>(component: React.ComponentType<P>): React.ComponentType<Omit<P, keyof (ReduxStateProps & ReduxDispatchProps)>>;
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
