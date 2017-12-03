/// <reference types="react" />
import * as React from 'react';
export declare type State = {
    showing: boolean;
};
export declare type Props = {
    buttonDisplay?: JSX.Element;
    buttonStyle?: React.CSSProperties;
    dropdownStyle?: React.CSSProperties;
};
export declare class Dropdown extends React.PureComponent<Props, State> {
    private _dropdownElement;
    private _buttonElement;
    constructor();
    componentWillMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private _toggleDropdown;
}
