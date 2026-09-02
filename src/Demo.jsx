import React, { useReducer } from 'react'


const initialState={
  count:0
}

function reducer(state,action){

  switch(action.type){
    case "decrement":
      return {count:state.count-1}
    case "increment":
      return {count:state.count+1}
    case "reset":
      return {count:0}
    case "default":
      return {count:state.count}
  }

}

// increment:()=>{
  // state.count+=1 
// }

const Demo = () => {

  const [state,dispatch]=useReducer(reducer,initialState)

  return (
    <div>
      <p>Count at:{state.count}</p>
      <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
      <button onClick={()=>dispatch({type:"increment"})}>increment</button>
      <button onClick={()=>dispatch({type:"reset"})}>reset</button>
    </div>
  )
}

export default Demo
