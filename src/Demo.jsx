import React, { useReducer } from 'react'

const initialCount={
  count:0
}

function reducer(value,action){
  switch(action.type){
    case "decrement":
      return{
        count:value.count-1
      }
  }

}

const Demo = () => {

  const [state,dispatch]=useReducer(reducer,initialCount)

  return (
    <div>
           <h2>Count is at:{state.count}</h2>
           <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>



    </div>
  )
}

export default Demo
