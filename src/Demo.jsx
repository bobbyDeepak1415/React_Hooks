import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

function reducer(state, action) {
  if (action.type === "increment") {
    return {
      count: state.count + 1,
    };
  } else {
    return {
      count: state.count - 1,
    };
  }
}

const Demo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count is at:{state.count}</h1>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
};

export default Demo;
