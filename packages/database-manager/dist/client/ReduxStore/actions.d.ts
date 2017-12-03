import { DECREMENT, INCREMENT } from './constants';
export declare type Action = Increment | Decrement;
export declare type Increment = {
    type: INCREMENT;
    payload: {
        value: number;
    };
};
export declare function increment(value: number): Increment;
export declare type Decrement = {
    type: DECREMENT;
    payload: {
        value: number;
    };
};
export declare function decrement(value: number): Decrement;
