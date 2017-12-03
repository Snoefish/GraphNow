import * as React from 'react';
import { LoginDialog } from './LoginDialog';

export type Props = {
  token: string | undefined;
  onError: (message: string) => void;
  authURL: string;
  setToken: (token: string) => void;
  clearToken: () => void;
};

export class Authentication extends React.PureComponent<Props> {

  public async componentWillMount(): Promise<void> {
    if (typeof localStorage !== 'undefined') {
      const storedToken = localStorage.getItem('authentication-token');
      if (storedToken != undefined) {
        try {
          const response = await fetch(this.props.authURL, {
            method: 'POST',
            headers: new Headers({
              'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
              operationName: 'VerifyToken',
              query: `
                query VerifyToken($token: String!) {
                  Authentication {
                    verifyToken(token: $token){
                      username
                      authorizations {
                        graphNow
                      }
                    }
                  }
                }
              `,
              variables: {
                token: storedToken,
              },
            }),
          });
          const result = await response.json();
          if (result.errors == undefined) {
            this.props.setToken(storedToken);
          } else {
            localStorage.removeItem('authentication-token');
          }
        } catch(e) {
          localStorage.removeItem('authentication-token');
        }
      }
    }
  }

  public render(): JSX.Element | null {
    if (this.props.token == undefined) {
      return (
        <LoginDialog
          authenticate={this._getToken}
        />
      );
    } else {
      return null; // tslint:disable-line:no-null-keyword
    }
  }

  private _getToken = async (username: string, password: string): Promise<void> => {
    try {
      const response = await fetch(this.props.authURL, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
          operationName: 'GetToken',
          query: `
            query GetToken($username: String!, $password: String!) {
              Authentication {
                getToken(username: $username, password: $password)
              }
            }
          `,
          variables: {
            password,
            username,
          },
        }),
      });
      const result = await response.json();
      if (result.errors != undefined) {
        this.props.onError(result.errors.map((err: Error) => err.message).join('\n'));
      } else if (result.data != undefined) {
        const token = result.data.Authentication.getToken;
        this.props.setToken(token);
      }
    } catch (err) {
      this.props.onError(err.message);
    }
  }
}

