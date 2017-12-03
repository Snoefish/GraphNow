import * as React from 'react';
import { Table } from './GetTables.query';

export type Props = {
  counter: number;
  data: {
    allTables: Table[];
  }
  increment: (value: number) => void;
  decrement: (value: number) => void;
};

export class DatabaseManager extends React.PureComponent<Props> {
  public render(): JSX.Element {
    console.log(this.props.data.allTables);
    return (
      <div>
        <h1>Database Manager</h1>
      </div>
    );
  }
}
