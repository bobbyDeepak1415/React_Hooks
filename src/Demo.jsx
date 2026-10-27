import React, { useCallback, useState } from 'react'
import Child1 from './Child1'
import handleClick from './handleClick'

const Demo = () => {

  console.log("parent rendering...")

const [count,setCount]=useState(0)
const [title,setTitle]=useState("")

const handleBtnClick=()=>{
  console.log("function created")
handleClick(setCount)
}
// const handleBtnClick=useCallback(()=>{
//   console.log("function created")
// handleClick(setCount)
// },[count])

  return (
    <div>
      <h1>Parent Count is at:{count}</h1>
      <input value={title} type='text' onChange={(e)=>setTitle(e.target.value)}/>
      <Child1 count={count}/>
      <button onClick={handleBtnClick}>Increment</button>
    </div>
  )
}

export default Demo
