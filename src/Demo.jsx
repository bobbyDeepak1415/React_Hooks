import React, { useState } from 'react'
import Child1 from './Child1'

const Demo = () => {


  

  const [count,setCount]=useState(0)
  const [item,setItem]=useState("")

  return (
    <div>
      
      <h1>Parent count at:{count}</h1>
      <input value={item} onChange={(e)=>setItem(e.target.value)}/>
      <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
      <Child1 count={count}/>
    </div>
  )
}

export default Demo
