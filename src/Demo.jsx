import React, { useState } from 'react'

const Demo = () => {

  console.log("parenet rendering...")

  const [count,setCount]=useState(0)

  return (
    <div>
      <h1>parent count is at:{count}</h1>
    
    </div>
  )
}

export default Demo
