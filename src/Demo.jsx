import React, { useReducer, useState } from 'react'


const initialState={
  count:0
}

const reducerFun=(state,action)=>{
  switch(action.type){
    case "increment":

    return{

      ...state,count:state.count+1
    }
  case "decrement":
   return{

      count:state.count-1
    }
  case "reset":
   return{

      count:0
    }
  default:
   return state



  }


}

const Demo = () => {

  const [state,dispatch]=useReducer(reducerFun,initialState)

  return (
    <div>
      <p>count is at :{state.count}</p>
      <button onClick={()=>dispatch({type:"decrement"})}>-</button>
      <button onClick={()=>dispatch({type:"increment"})}>+</button>
      <button onClick={()=>dispatch({type:"reset"})}>reset</button>
    </div>
  )
}

export default Demo
