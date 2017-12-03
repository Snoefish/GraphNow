import * as React from 'react';

// tslint:disable-next-line:typedef
export function configureInjectPropsHOC<InjectedProps>(injectedProps: InjectedProps) {

  // : new() => React.Component<ChildProps<OwnProps & QueryLoaderProps, GraphQLResponse>>
  return function createInjectPropsHOC<OwnProps>(
    Component: React.ComponentType<OwnProps & InjectedProps>,  // tslint:disable-line:variable-name
  ): new() => React.Component<OwnProps> {
    // tslint:disable-next-line:no-any
    return class InjectPropsHOC extends React.PureComponent<OwnProps> {
      // tslint:disable-next-line:typedef
      public render() {
          return <Component {...this.props} {...injectedProps}/>;
      }
    };
  };
}
