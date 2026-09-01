import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './redux/CounterSlice';

const Demo = () => {

  const dispatch = useDispatch();

  const count=useSelector((state)=>state.counter.count)
  return (
    <div>
      <h2>Count at:{count}</h2>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(increment())}>+</button>
    </div>
  )
}

export default Demo
