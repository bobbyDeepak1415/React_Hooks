import React, { useState } from 'react'
import Child1 from './Child1'

const Demo = () => {

const [count,setCount]=useState(0)

  return (
    <div>
      <h1>Parent Count is at:{count}</h1>
      <Child1 count={count}/>
      <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
    </div>
  )
}

export default Demo
