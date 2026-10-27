import React, { useReducer, useState } from 'react'

const initialCount={
  count:0
}

function reducer(state,action){
switch(action.type){
  case "decrement":
    return {
      count:state.count-1
    }
  
  case "increment":
    return {
      count:state.count+1
    }
  
  case "reset":
    return {
      count:0
    }
  
    
}
}


const Demo = () => {

  const [state,dispatch]=useReducer(reducer,initialCount)

return (
  <>
  <h1>Count is at:{state.count}</h1>
  <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
  <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
  <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
  </>
)


}

export default Demo
