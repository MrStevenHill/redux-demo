import counterReducer, { counterInitialState } from "./counterReducer";

const initialState = {
  counter: counterInitialState
};

export function rootReducer(state = initialState, action) {
  return {
    counter: counterReducer(state.counter, action)
  };
}

export default rootReducer;
