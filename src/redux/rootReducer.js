import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER,
  SET_COUNTER
} from "./actionTypes";

const initialState = {
  counter: 0
};

export function rootReducer(state = initialState, action) {
  if (action.type === INCREMENT_COUNTER) {
    return { ...state, counter: state.counter + 1 };
  }
  if (action.type === DECREMENT_COUNTER) {
    return { ...state, counter: state.counter - 1 };
  }
  if (action.type === RESET_COUNTER) {
    return { ...state, counter: 0 };
  }
  if (action.type === SET_COUNTER) {
    return { ...state, counter: parseInt(action.value) };
  }
  return state;
}

export default rootReducer;
