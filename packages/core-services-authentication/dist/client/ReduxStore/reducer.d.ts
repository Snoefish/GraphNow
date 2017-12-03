import { Action } from './actions';
export declare type State = {
    token: string | undefined;
    username: string | undefined;
};
/**
 * Redux state reducer for Authentication
 *
 * @export
 * @param {State} [state=initialState]
 * @param {Action} action
 * @returns {State}
 */
export declare function reducer(state: State | undefined, action: Action): State;
