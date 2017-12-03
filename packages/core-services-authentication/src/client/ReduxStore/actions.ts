import { CLEAR_TOKEN, SET_TOKEN } from './constants';

export type Action = SetTokenAction | ClearTokenAction;

/* SET_TOKEN */
export type SetTokenAction = {
  type: SET_TOKEN;
  payload: {
    token: string;
  };
};

/**
 * Redux action-creator to set the authentication token
 *
 * @export
 * @param {string} token Token to set
 * @returns {SetTokenAction}
 */
export function setToken(token: string): SetTokenAction {
  return {
    type: SET_TOKEN,
    payload: {
      token,
    },
  };
}

/* CLEAR_TOKEN */
export type ClearTokenAction = {
  type: CLEAR_TOKEN;
};

/**
 * Redux action creator to clear the authentication token
 *
 * @export
 * @returns {ClearTokenAction}
 */
export function clearToken(): ClearTokenAction {
  return {
    type: CLEAR_TOKEN,
  };
}

