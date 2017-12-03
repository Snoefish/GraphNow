/// <reference types="react" />
export declare type ReduxStateProps = {
    counter: number;
};
export declare type ReduxDispatchProps = {
    increment: (value: number) => void;
    decrement: (value: number) => void;
};
/**
 * Function to connect the database manager component to a redux store
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
