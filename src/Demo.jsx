import React, { useReducer, useState } from "react";



const initialState={
  count:0
}

function reducer(state,action){
switch(action.type) {
  case "increment":
return
  
}
}

const Demo = () => {

  const [state,dispatch]=useReducer(reducer,initialState)

  return (
    <div>
      <h1>count is now :{state.count}</h1>
      <button onClick={() => dispatch({type:"decrement"})}>-</button>
      <button onClick={() => dispatch({type:"decrement"})}>+</button>
      <button onClick={() => reducer("reset")}>Reset</button>
    </div>
  );
};

export default Demo;
