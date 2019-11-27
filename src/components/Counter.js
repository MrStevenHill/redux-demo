import React from "react";
import { connect } from "react-redux";

import {
  incrementCounter,
  decrementCounter,
  setCounter,
  resetCounter
} from "../redux/actions/counter";

const Counter = ({ value, increment, decrement, set, reset }) => {
  return (
    <div>
      <button onClick={decrement}>-</button>
      <input
        type="number"
        name="counter"
        value={value}
        onChange={event => set(event.target.value)}
      />
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

const mapStateToProps = state => {
  return { value: state.counter.value };
};

const mapDispatchToProps = {
  increment: incrementCounter,
  decrement: decrementCounter,
  set: setCounter,
  reset: resetCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
