import { cardClass, modalBackgroundClass, modalClass, pageCenterClass, pageMiddleClass } from 'core-styles';
import * as React from 'react';
import { classes } from 'typestyle';

export type Props = {
  authenticate: (username: string, password: string) => void;
};

export type State = {
  inputUsername?: string;
  inputPassword?: string;
};

export class LoginDialog extends React.Component<Props, State> {

  constructor() {
    super();

    this.state = {
      inputUsername: '',
      inputPassword: '',
    };
  }

  public render(): JSX.Element | null {
    return (
      <div>
        <div className={modalBackgroundClass} />
        <div className={classes(cardClass, modalClass, pageMiddleClass, pageCenterClass)}>
            <span style={{ fontSize: '1.5rem' }}>Authentication</span>
            <div>
              <input
                style={{ margin: '5px' }}
                type='text'
                placeholder='username'
                onChange={this._handleInputUsernameChange}
                onKeyUp={this._handleEnterPress}
                autoFocus={true}
              />
              <input
                style={{ margin: '5px' }}
                type='password'
                placeholder='password'
                onChange={this._handleInputPasswordChange}
                onKeyUp={this._handleEnterPress}
              />
            </div>
            <button
              style={{ float: 'right' }}
              type='button'
              onClick={this._handleAuthenticate}
            >Login</button>
        </div>
      </div>
    );
  }

  private _handleInputUsernameChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      inputUsername: event.currentTarget.value,
    });
  }

  private _handleInputPasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      inputPassword: event.currentTarget.value,
    });
  }

  private _handleAuthenticate = () => {
    const { inputUsername, inputPassword } = this.state;
    const { authenticate } = this.props;
    if (inputUsername != undefined && inputPassword != undefined) {
      authenticate(inputUsername, inputPassword);
    }
  }

  private _handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      this._handleAuthenticate();
    }
  }
}
