/// <reference types="react" />
import * as React from 'react';
import { QueryProps } from 'react-apollo';
export declare function configureLoadQueryHOC(options?: {
    InitialLoadingComponent?: React.ComponentType;
    NewDataLoadingComponent?: React.ComponentType;
    ErrorComponent?: React.ComponentType<{
        error: Error;
    }>;
    onQueryError?: (error: Error) => void;
}): <QueryResult, ComponentProps extends {
    data: QueryResult;
}>(Component: React.ComponentType<ComponentProps>) => {
    new (props?: (Omit<ComponentProps, "data"> & {
        data: QueryResult & QueryProps<{
            [key: string]: any;
        }>;
    } & {
        onQueryError?: ((error: Error) => void) | undefined;
    }) | undefined, context?: any): {
        _hasData: boolean;
        render(): JSX.Element | null;
        setState<K extends never>(f: (prevState: {}, props: Omit<ComponentProps, "data"> & {
            data: QueryResult & QueryProps<{
                [key: string]: any;
            }>;
        } & {
            onQueryError?: ((error: Error) => void) | undefined;
        }) => Pick<{}, K>, callback?: (() => any) | undefined): void;
        setState<K extends never>(state: Pick<{}, K>, callback?: (() => any) | undefined): void;
        forceUpdate(callBack?: (() => any) | undefined): void;
        props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<Omit<ComponentProps, "data"> & {
            data: QueryResult & QueryProps<{
                [key: string]: any;
            }>;
        } & {
            onQueryError?: ((error: Error) => void) | undefined;
        }>;
        state: Readonly<{}>;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
};
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
