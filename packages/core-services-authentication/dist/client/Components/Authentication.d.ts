/// <reference types="react" />
import * as React from 'react';
export declare type Props = {
    token: string | undefined;
    onError: (message: string) => void;
    authURL: string;
    setToken: (token: string) => void;
    clearToken: () => void;
};
export declare class Authentication extends React.PureComponent<Props> {
    componentWillMount(): Promise<void>;
    render(): JSX.Element | null;
    private _getToken;
}
