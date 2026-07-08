import React, { useReducer, useState } from 'react'


const initialState={
  count:1000
}

function reducer(state,action){

  

}


const Child1 = () => {

  // const [count,setCount]=useState(0)

  const [state,dispatch]=useReducer(reducer,initialState)

  const handleClick=()=>{

  }

  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={handleClick}>+</button>
    </div>
  )
}

export default Child1
