/// <reference types="react" />
export { setToken, clearToken, State, reducer } from './ReduxStore';
export * from './configureAuthAfterware';
export * from './configureAuthMiddleware';
export declare type AuthenticationExposedProps = {
    onError: (message: string) => void;
    authURL: string;
};
export declare const Authentication: React.ComponentType<AuthenticationExposedProps>;
