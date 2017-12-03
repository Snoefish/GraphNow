import * as React from 'react';
import { QueryProps } from 'react-apollo';

export function configureLoadQueryHOC(options?: {
  // tslint:disable-line:typedef
  InitialLoadingComponent?: React.ComponentType;
  NewDataLoadingComponent?: React.ComponentType;
  ErrorComponent?: React.ComponentType<{ error: Error }>;
  onQueryError?: (error: Error) => void;
}) {
  return function createLoadQueryHOC<QueryResult, ComponentProps extends { data: QueryResult }>( // tslint:disable-line:typedef
    Component: React.ComponentType<ComponentProps>, // tslint:disable-line:variable-name
  ) {

    type HOCProps = {
      onQueryError?: (error: Error) => void;
    };

    return class LoadQueryHOC extends React.PureComponent<Omit<ComponentProps, 'data'> & { data: QueryResult & QueryProps } & HOCProps> {
      public _hasData: boolean = false;

      public render(): JSX.Element | null {
        const { data, onQueryError, ...ownProps } = this.props;

        if (data == undefined) {
          if (options != undefined && options.InitialLoadingComponent != undefined) {
            return <options.InitialLoadingComponent {...ownProps} />;
          } else {
            return <span>Loading...</span>;
          }
        } else if (data.error != undefined) {
          if (options != undefined && options.ErrorComponent != undefined) {
            if (options.onQueryError != undefined) options.onQueryError(data.error);
            if (onQueryError != undefined) onQueryError(data.error);
            return <options.ErrorComponent error={data.error} {...ownProps} />;
          } else {
            return null; // tslint:disable-line:no-null-keyword
          }
        } else if (data.loading && !this._hasData) {
          if (options != undefined && options.InitialLoadingComponent != undefined) {
            return <options.InitialLoadingComponent {...ownProps} />;
          } else {
            return <span>Loading...</span>;
          }
        } else {
          this._hasData = true;
          return [
            data.loading && options != undefined && options.NewDataLoadingComponent != undefined ? (
              <options.NewDataLoadingComponent key={1} {...ownProps} />
            ) : null,// tslint:disable-line:no-null-keyword
            <Component key={2} data={data} {...ownProps} />,
          ] as any;
        }
      }
    };
  };
}
export type Diff<T extends string, U extends string> = ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];
export type Omit<T, K extends keyof T> = { [P in Diff<keyof T, K>]: T[P] };
