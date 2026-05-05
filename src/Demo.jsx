import React, { useReducer } from "react";



const initialState={
  count:0
}

function reducer(state,action){

  switch(action.type){
    case "increment"
  }

}

const Demo = () => {

  const [state,action]=useReducer(reducer,initialState)


  return (
    <div>
      <h2>count is at:{count}</h2>
      <button></button>
    </div>
  );
};

export default Demo;
