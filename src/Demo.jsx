import React, { useReducer, useState } from "react";


const initialState={
  count:0
}

function reducer(state,action){
  switch(action.type){
    case "increment" :return{count:state.count+1}
  }

}


const Demo = () => {

  const [state,dispatch]=useReducer(reducer,initialState)

  return <div>

    <h1>Count is at:{state.count}</h1>
    <button onClick={()=>dispatch({type:"increment"})}>+</button>
  </div>;
};

export default Demo;
