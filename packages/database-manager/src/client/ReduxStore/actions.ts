import { DECREMENT, INCREMENT } from './constants';

export type Action =
| Increment
| Decrement;

export type Increment = {
  type: INCREMENT;
  payload: {
    value: number;
  };
};

export function increment(value: number): Increment {
  return {
    type: INCREMENT,
    payload: {
      value,
    },
  };
}

export type Decrement = {
  type: DECREMENT;
  payload: {
    value: number;
  };
};

export function decrement(value: number): Decrement {
  return {
    type: DECREMENT,
    payload: {
      value,
    },
  };
}
