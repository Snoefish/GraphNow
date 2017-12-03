import { configureLoadQueryHOC, LoadBar } from 'core-components';
import { DatabaseManager as DatabaseManagerComponent } from './DatabaseManager';
import { GetTables } from './GetTables.query';

// tslint:disable-next-line:variable-name
const LoadQueryHOC = configureLoadQueryHOC({ NewDataLoadingComponent: LoadBar });

export type ExposedProps = {
  counter: number;
  increment: (value: number) => void;
  decrement: (value: number) => void;
};

// tslint:disable-next-line:variable-name
export const DatabaseManager = GetTables(
  LoadQueryHOC(DatabaseManagerComponent),
) as React.ComponentType<ExposedProps>;
