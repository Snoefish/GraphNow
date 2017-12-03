import { Action } from './actions';
export declare type State = {
    counter: number;
};
export declare function reducer(state: State | undefined, action: Action): State;
