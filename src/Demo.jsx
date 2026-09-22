import React, { useState } from 'react'

const Demo = () => {

  console.log("parent rendering")

  const [count,setCount]=useState(0)

  return (
    <div>
      <h2>Parent</h2>
      <p>{count}</p>
      <button onClick={()=>setCount(prev=>prev+1)}>+</button>
      
    </div>
  )
}

export default Demo
