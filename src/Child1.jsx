import React, { useState } from 'react'

const Child1 = () => {

  const [count,setCount]=useState(0)

  const handleClick=()=>{
    
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleClick}>+</button>
    </div>
  )
}

export default Child1
