import React, { useReducer } from 'react'

const initialState={
  count:109
}

function reducerFunc(state,action){

}


const Demo = () => {

  const [state,dispatch]=useReducer(reducerFunc,initialState)

  return (
    <div>
      <h2>Count is at:{state.count}</h2>
      
    </div>
  )
}

export default Demo
