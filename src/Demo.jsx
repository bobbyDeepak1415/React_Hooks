import React, { useReducer } from 'react'


const intiialState={
  count:0
}

function reducer(state,action){
switch(action.type){
  case "increment":
    return state.count+=1
}
}


const Demo = () => {

  const [state,dispatch]=useReducer(reducer,intiialState)

  return (
    <div>
      <p>Count is at:{state.count}</p>
      <button onClick={()=>dispatch("increment")}>Increment</button>
      
    </div>
  )
}

export default Demo
