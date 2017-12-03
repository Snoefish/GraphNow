/// <reference types="react-notification-system-redux" />
/// <reference types="react" />
import { State as AuthenticationState } from 'core-services-authentication/dist/client';
import { State as NotificationsState } from 'notifications';
import * as React from 'react';
import { compose, Dispatch } from 'redux';
import { ReducersMapObject } from 'redux';
/** Augment global window object to attach redux dev tools */
declare global  {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
export declare type DefaultReduxStore = {
    authentication: AuthenticationState;
    notifications: NotificationsState;
};
export declare type ConfigureProviderHOCConfig = {
    reducers: ReducersMapObject;
    graphqlURL: string;
    authenticationURL: string;
    subscriptionURL?: string;
};
export declare function configureProviderHOC(config: ConfigureProviderHOCConfig): (Component: React.ComponentType<{
    state?: DefaultReduxStore | undefined;
    dispatch?: Dispatch<DefaultReduxStore> | undefined;
}>) => {
    new (props?: any, context?: any): {
        render(): JSX.Element;
        setState<K extends never>(f: (prevState: {}, props: any) => Pick<{}, K>, callback?: (() => any) | undefined): void;
        setState<K extends never>(state: Pick<{}, K>, callback?: (() => any) | undefined): void;
        forceUpdate(callBack?: (() => any) | undefined): void;
        props: any;
        state: Readonly<{}>;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
};
