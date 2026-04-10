import React, { useReducer } from 'react'

const initialState={
  count:0
}

function reducer(state,action){
switch(action.type){
  case "increment":
    return {}
}
}


const Demo = () => {

  const [state,dispatch]=useReducer(reducer,initialState)

  return (
    <div>
      <h1>Count is now at:{state.count}</h1>
      <button onClick={()=>dispatch({type:"decrement"})}>-</button>
      <button onClick={()=>dispatch({type:"increment"})}>+</button>
      <button onClick={()=>dispatch({type:"reset"})}>reset</button>
      
    </div>
  )
}

export default Demo
