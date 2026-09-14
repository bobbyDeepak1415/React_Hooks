import React, { useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './redux/CounterSlice';


const initialState={
    count:20
}


function reducer(state,action){

  switch(action.type){
    case "increment":
      
  }

}


const Demo = () => {


  const [state,dispatch]=useReducer(reducer,initialState)

 return (
  <div>
  <h2>Count at:{state.count}</h2>
  </div>
  )
}

export default Demo
