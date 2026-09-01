import React, { useState } from 'react'

const Demo = () => {

  const [count,setCount]=useState(0)
  return (
    <div>
      <h2>Count at:{count}</h2>
      <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default Demo
