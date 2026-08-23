import React, { useReducer, useState } from 'react'


const initialState={
  count:0
}

const reducerFun=(state,action)=>{
  switch(action.type){
    case "increment":
  state.count+=1
  case "decrement":
    state.count-=1
  case "reset":
    state.count=0
  case "default":
    state.count=0



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
