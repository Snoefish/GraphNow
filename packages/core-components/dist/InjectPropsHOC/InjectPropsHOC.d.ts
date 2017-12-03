/// <reference types="react" />
import * as React from 'react';
export declare function configureInjectPropsHOC<InjectedProps>(injectedProps: InjectedProps): <OwnProps>(Component: React.ComponentType<OwnProps & InjectedProps>) => new () => React.Component<OwnProps, {}>;
