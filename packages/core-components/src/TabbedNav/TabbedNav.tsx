import { activeTabClass, flexRowContainerClass, navbarClass, tabNavClass } from 'core-styles';
import * as React from 'react';
import { classes } from 'typestyle';

export type TabConfig = {
  [key: string]: {
    label: string;
    component: JSX.Element;
  };
};

export type Props = {
  tabs: TabConfig | undefined;
  beforeBar?: React.ComponentType;
  afterBar?: React.ComponentType;
};

export type State = {
  activeTabKey: string | undefined;
};

export class TabbedNav extends React.PureComponent<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      activeTabKey: props.tabs != undefined ? Object.keys(props.tabs)[0] : undefined,
    };
  }

  public componentWillReceiveProps(nextProps: Props) {
    if (nextProps.tabs != undefined && nextProps.tabs !== this.props.tabs) {
      this.setState({
        activeTabKey: Object.keys(nextProps.tabs)[0],
      });
    }
  }

  public render(): JSX.Element | null {
    const { tabs } = this.props;
    const { activeTabKey } = this.state;
    if (tabs != undefined) {
      return (
        <div id='tab-container'>
          <div id='tab-buttons' className={classes(navbarClass, flexRowContainerClass, tabNavClass)}>
            {this.props.beforeBar != undefined ? <this.props.beforeBar/> : undefined}
            {Object.keys(tabs).map(tabKey => (
              <button
                key={tabKey}
                className={tabs[tabKey].label === activeTabKey ? activeTabClass : undefined}
                onClick={() => this._setActiveTab(tabKey)}
              >
                {tabs[tabKey].label}
              </button>
            ))}
            {this.props.afterBar != undefined ? <this.props.afterBar/> : undefined}
          </div>
          {activeTabKey != undefined ? tabs[activeTabKey].component : undefined}
        </div>
      );
    }
    return null;// tslint:disable-line:no-null-keyword
  }

  private _setActiveTab = (tabKey: string): void => {
    this.setState({
      activeTabKey: tabKey,
    });
  }
}
