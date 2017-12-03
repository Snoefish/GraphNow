import { Action } from './actions';
import { DECREMENT, INCREMENT } from './constants';

const initialState = {
  counter: 0,
};

export type State = {
  counter: number;
};

export function reducer(state: State = initialState, action: Action): State {
  switch(action.type) {
    case INCREMENT: {
      return {
        ...state,
        counter: state.counter + action.payload.value,
      };
    }
    case DECREMENT: {
      return {
        ...state,
        counter: state.counter - action.payload.value,
      };
    }
    default: {
      return state;
    }
  }
}
