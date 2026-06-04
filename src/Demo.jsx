import React, { useState } from 'react'
import Child1 from './Child1'


const Demo = () => {

  const [count,setCount]=useState(0)

  return (
    <div>

      <p>count is at :{count}</p>
      <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>

      
      <Child1/>
    </div>
  )
}

export default Demo
