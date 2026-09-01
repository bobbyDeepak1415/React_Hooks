import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './redux/CounterSlice';

const Demo = () => {

  const dispatch = useDispatch();

  const count=useSelector((state)=>state.counter.value)
  return (
    <div>
      <h2>Count at:{count}</h2>
      <button onClick={()=>dispatch(increment())}>+</button>
    </div>
  )
}

export default Demo
