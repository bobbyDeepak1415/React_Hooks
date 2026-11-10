import React, { useReducer } from 'react'


const initialState={
  count:100
}

function reducer(state,action){
switch(action.type){
  case "decrement" :{
    return {
      count:state.count-1
    }
  }
}
}

const Demo = () => {


  const [state,dispatch]=useReducer(reducer,initialState)

  return (
    <div>
      <h2>Count is at:{state.count}</h2>
      <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
      
    </div>
  )
}

export default Demo
