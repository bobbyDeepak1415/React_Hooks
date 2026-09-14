import React, { useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './redux/CounterSlice';


const initialState={
    count:20
}


function reducer(state,action){

  switch(action.type){
    case "increment":
      return count=state.count+1

  }

}


const Demo = () => {


  const [state,dispatch]=useReducer(reducer,initialState)

 return (
  <div>
  <h2>Count at:{state.count}</h2>
  <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
  <button onClick={()=>dispatch({type:"increment"})}>increment</button>
  </div>
  )
}

export default Demo
