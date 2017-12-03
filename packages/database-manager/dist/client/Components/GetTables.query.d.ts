/// <reference types="react" />
import { QueryProps } from 'react-apollo';
export declare type Field = {
    id: string;
    name: string;
    type: string;
    isUnique: boolean;
    isRequired: boolean;
    isList: boolean;
};
export declare type Table = {
    id: string;
    name: string;
    fields: Field[];
};
export declare type QueryResult = {
    allTables: Table[];
};
export declare type Variable = {};
export declare function GetTables<OwnProps, InputProps = OwnProps & {
    data?: QueryResult & QueryProps;
}>(component: React.ComponentType<InputProps>): React.ComponentType<OwnProps & Variable>;
