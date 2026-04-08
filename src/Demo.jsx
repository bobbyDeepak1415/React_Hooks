

import React, { useState } from 'react'

const Demo = () => {

  const [count,setCount]=useState(0)

  return (
    <div>
      <h1>Parent count is at:{count}</h1>
      <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
      
    </div>
  )
}

export default Demo
