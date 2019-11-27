export function incrementCounter() {
  return {
    type: "INCREMENT_COUNTER"
  };
}

export function decrementCounter() {
  return {
    type: "DECREMENT_COUNTER"
  };
}

export function resetCounter() {
  return {
    type: "RESET_COUNTER"
  };
}

export function setCounter(value) {
  return {
    type: "SET_COUNTER",
    value
  };
}
