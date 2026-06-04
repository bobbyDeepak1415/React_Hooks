import { useReducer } from "react";

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return (state.count += 1);
    case "decrement":
      return (state.count -= 1);

    case "reset":
      return (state.count = 0);
  }
}

const Demo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>{count.current}</p>
      <button onClick={() => dispatch({type:"increment"})}>+</button>
    </div>
  );
};

export default Demo;
