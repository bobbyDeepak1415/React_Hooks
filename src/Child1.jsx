import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      return {
        count: state.count + 1,
      };
    }
  }
};

const Child1 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={dispatch({ type: "increment" })}>+</button>
    </div>
  );
};

export default Child1;
