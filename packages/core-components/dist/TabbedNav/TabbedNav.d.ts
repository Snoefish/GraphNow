/// <reference types="react" />
import * as React from 'react';
export declare type TabConfig = {
    [key: string]: {
        label: string;
        component: JSX.Element;
    };
};
export declare type Props = {
    tabs: TabConfig | undefined;
    beforeBar?: React.ComponentType;
    afterBar?: React.ComponentType;
};
export declare type State = {
    activeTabKey: string | undefined;
};
export declare class TabbedNav extends React.PureComponent<Props, State> {
    constructor(props: Props);
    componentWillReceiveProps(nextProps: Props): void;
    render(): JSX.Element | null;
    private _setActiveTab;
}
