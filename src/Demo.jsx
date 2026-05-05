import React, { useReducer } from "react";



const initialState={
  count:0
}

function reducer(state,action){

  switch(action.type){
    case "increment" :
      return {count:state.count+1}
    case "decrement" :
      return {count:state.count-1}
    case "reset" :
      return {count:0}
  }

}

const Demo = () => {

  const [state,diapatch]=useReducer(reducer,initialState)


  return (
    <div>
      <h2>count is at:{state.count}</h2>
      <button onClick={()=>diapatch({type:"decrement"})}>-</button>
      <button onClick={()=>diapatch({type:"increment"})}>+</button>
      <button onClick={()=>diapatch({type:"reset"})}>reset</button>
    </div>
  );
};

export default Demo;
