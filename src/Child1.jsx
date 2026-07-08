import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const Child1 = () => {


  const [count,dispatch]=useReducer()

  return (
    <div>
      <h2>{}</h2>
    </div>
  );
};

export default Child1;
