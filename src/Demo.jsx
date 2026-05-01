import React, { useState } from 'react'
import Child1 from './Child1'

const Demo = () => {

  console.log("parent rendering...")
  const [item,setItem]=useState("")

  const [count,setCount]=useState(0)
  return (
    <div>

      <h1>The count is at :{count}</h1>
      <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
      <div>

      <input value={item} onChange={(e)=>setItem(e.target.value)}/>
      </div>
      <div>
        <Child1 count={count}/>
      </div>
      
    </div>
  )
}

export default Demo
