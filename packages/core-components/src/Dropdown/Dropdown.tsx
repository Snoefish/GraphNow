import { cardClass, flexColumnContainerClass, flexRowContainerClass } from 'core-styles';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/lib/md';
import { classes } from 'typestyle';
import { elementPosition } from '../utils';

export type State = {
  showing: boolean;
};

export type Props = {
  buttonDisplay?: JSX.Element;
  buttonStyle?: React.CSSProperties;
  dropdownStyle?: React.CSSProperties;
};

export class Dropdown extends React.PureComponent<Props, State> {
  private _dropdownElement: HTMLDivElement;
  private _buttonElement: HTMLButtonElement | null;

  constructor() {
    super();
    this.state = {
      showing: false,
    };
  }

  public componentWillMount(): void {
    if(typeof document !== 'undefined') {
      this._dropdownElement = document.createElement('div');
      document.body.appendChild(this._dropdownElement);
    }
  }

  public componentWillUnmount(): void {
    if(typeof document !== 'undefined') {
      document.body.removeChild(this._dropdownElement);
    }
  }

  public render(): JSX.Element {
    return (
      <button onClick={this._toggleDropdown} style={this.props.buttonStyle} ref={ref => (this._buttonElement = ref)}>
        <div className={flexRowContainerClass}>
          {this.props.buttonDisplay}
          {this.state.showing ? <MdArrowDropUp /> : <MdArrowDropDown />}
        </div>
        {this.state.showing && this._buttonElement != undefined ? (
          (ReactDOM as any).createPortal(
            <div
              className={classes(cardClass, flexColumnContainerClass)}
              style={{
                position: 'absolute',
                top: elementPosition(this._buttonElement).bottom,
                left: elementPosition(this._buttonElement).left,
                margin: 0,
                zIndex: 10,
                width: 'max-content',
                ...this.props.dropdownStyle,
              }}
            >
              {this.props.children}
            </div>,
            this._dropdownElement,
          )
        ) : (
          undefined
        )}
      </button>
    );
  }

  private _toggleDropdown = () => {
    this.setState({ showing: !this.state.showing });
  }
}
