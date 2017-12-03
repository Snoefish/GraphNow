/// <reference types="react" />
import * as React from 'react';
import { Table } from './GetTables.query';
export declare type Props = {
    counter: number;
    data: {
        allTables: Table[];
    };
    increment: (value: number) => void;
    decrement: (value: number) => void;
};
export declare class DatabaseManager extends React.PureComponent<Props> {
    render(): JSX.Element;
}
