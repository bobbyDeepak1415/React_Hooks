import React, { useReducer } from "react";



const initialState={
  count:0
}

function reducer(state,action){

  switch(action.type){
    case "increment" :
      return state.count+1
  }

}

const Demo = () => {

  const [state,diapatch]=useReducer(reducer,initialState)


  return (
    <div>
      <h2>count is at:{state.count}</h2>...
      <button onClick={()=>diapatch({type:"increment"})}>+</button>
    </div>
  );
};

export default Demo;
