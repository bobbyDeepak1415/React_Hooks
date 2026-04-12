import React, { useReducer } from 'react'


const initialState={
  count:0
}


const reducer=(state,action)=>{

  switch(action.type){
    case "increment": return {count:state.count+1}
    case "decrement": return {count:state.count-1}
    case "reset": return {state}
  }

}
const Demo = () => {


  const [state,dispatch]=useReducer(reducer,initialState)

  return (
    <div>
      <h1>Count at:{state.count}</h1>
      <button onClick={() => dispatch("decrement")}>-</button>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
}

export default Demo
