import { createReducer } from "./helpers";

export const counterInitialState = { value: 0 };

function incrementCounter(counterState) {
  return { ...counterState, value: counterState.value + 1 };
}

function decrementCounter(counterState) {
  return { ...counterState, value: counterState.value - 1 };
}

function resetCounter(counterState) {
  return { ...counterState, value: 0 };
}

function setCounter(counterState, action) {
  return { ...counterState, value: parseInt(action.value) };
}

const counterReducer = createReducer([], {
  INCREMENT_COUNTER: incrementCounter,
  DECREMENT_COUNTER: decrementCounter,
  RESET_COUNTER: resetCounter,
  SET_COUNTER: setCounter
});

export default counterReducer;
