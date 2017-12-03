/// <reference types="react" />
import * as React from 'react';
export declare type Props = {
    authenticate: (username: string, password: string) => void;
};
export declare type State = {
    inputUsername?: string;
    inputPassword?: string;
};
export declare class LoginDialog extends React.Component<Props, State> {
    constructor();
    render(): JSX.Element | null;
    private _handleInputUsernameChange;
    private _handleInputPasswordChange;
    private _handleAuthenticate;
    private _handleEnterPress;
}
