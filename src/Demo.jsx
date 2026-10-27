import React, { useCallback, useMemo, useState } from 'react'
import Child1 from './Child1'
import handleClick from './handleClick'

const Demo = () => {

  console.log("parent rendering...")


const [count,setCount]=useState(0)
const [title,setTitle]=useState("")

// const handleBtnClick=()=>{
//   console.log("function created")
// handleClick(setCount)
// }
const handleBtnClick=useCallback(()=>{
  console.log("function created")
handleClick(setCount)
},[])

const expensiveValue=useMemo(()=>{
  console.log("expensive computation done")
  return count*1000
})

  return (
    <div>
<p>Expensive computed number:</p>
      <h1>Parent Count is at:{count}</h1>
      <button onClick={handleBtnClick}>Increment</button>

      <input value={title} type='text' onChange={(e)=>setTitle(e.target.value)}/>
      <Child1 handleClick={handleBtnClick}  count={count}/>
    </div>
  )
}

export default Demo
