import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './redux/CounterSlice';

const Demo = () => {

  const count=useSelector((state)=>state.counter.count)


  const dispatch = useDispatch();

  return (
    <div>
      <p>Count at:{count}</p>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      
    </div>
  )
}

export default Demo
