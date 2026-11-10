import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './redux/CounterSlice';

const Demo = () => {

  const count=useSelector((state)=>state.counter.value)

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count is at:{count}</h2>
      <button onClick={()=>dispatch(increment())}>decrement</button>
    </div>
  )
}

export default Demo
