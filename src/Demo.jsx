import React, { useState } from 'react'

const initialState={
  count:0
}

function reducer(state,action){
  if(action.type==="increment"){
    return {count:state.count+1}
  }

}


const Demo = () => {

  const [state,dispatch]=useState(reducer,initialState)

  return (
    <div>
      <h2>Count is at:{state.count}</h2>
      <button onClick={()=>dispatch({type:"increment"})}>+</button>
      
    </div>
  )
}

export default Demo
