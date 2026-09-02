import React, { useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, multiplyByAmount } from './redux/NumbersSlice';


const Demo = () => {

  const num=useSelector(state=>state.numbers.num)

  const dispatch = useDispatch();

  return (
    <div>
      <p>Count at:{num}</p>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(multiplyByAmount(3))}>*3</button>
    </div>
  )
}

export default Demo
