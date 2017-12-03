import * as jwtDecode from 'jwt-decode';
import { Action } from './actions';
import { CLEAR_TOKEN, SET_TOKEN } from './constants';

export type State = {
  token: string | undefined;
  username: string | undefined;
};

const initialState: State = {
  token: undefined,
  username: undefined,
};
/**
 * Redux state reducer for Authentication
 *
 * @export
 * @param {State} [state=initialState]
 * @param {Action} action
 * @returns {State}
 */
export function reducer(
  state: State = initialState,
  action: Action,
): State {
  switch (action.type) {
    case SET_TOKEN: {
      if (typeof localStorage !== 'undefined') localStorage.setItem('authentication-token', action.payload.token);
      return { ...state, token: action.payload.token, username: getNameFromToken(action.payload.token) };
    }
    case CLEAR_TOKEN: {
      if (typeof localStorage !== 'undefined') localStorage.removeItem('authentication-token');
      return { ...state, token: undefined, username: undefined };
    }
    default: {
      return state;
    }
  }
}

/**
 * Retrieve username from a JWT token payload
 *
 * @param {string} jwt JWT Token to retrieve username from
 * @returns {(string | undefined)} username or undefined
 */
function getNameFromToken(jwt: string): string | undefined {
  if (jwt != undefined) {
    try {
      const payload = jwtDecode<any>(jwt) as { username: any }; // tslint:disable-line:no-any
      if (payload.username != undefined && typeof payload.username === 'string') {
        return payload.username;
      }
    } catch(e) {
      return undefined;
    }
  }
  return undefined;
}
