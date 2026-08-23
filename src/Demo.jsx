import React, { useReducer, useState } from 'react'


const initialState={
  count:0
}

const reducerFun=(state,action)=>{
  switch(action.type){
    case "increment":

  }
}

const Demo = () => {

  const [state,dispatch]=useReducer(reducerFun,initialState)

  return (
    <div>
      <p>count is at :{state.count}</p>
      <button onClick={()=>dispatch({type:"decrement"})}>-</button>
    </div>
  )
}

export default Demo
