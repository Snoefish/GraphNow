import { CLEAR_TOKEN, SET_TOKEN } from './constants';
export declare type Action = SetTokenAction | ClearTokenAction;
export declare type SetTokenAction = {
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
export declare function setToken(token: string): SetTokenAction;
export declare type ClearTokenAction = {
    type: CLEAR_TOKEN;
};
/**
 * Redux action creator to clear the authentication token
 *
 * @export
 * @returns {ClearTokenAction}
 */
export declare function clearToken(): ClearTokenAction;
