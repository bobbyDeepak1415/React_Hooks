import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Demo = () => {

  const count=useSelector((state)=>state.counter.value)
  return (
    <div>
      <h2>Count at:{count}</h2>
      <button onClick={()=}>+</button>
    </div>
  )
}

export default Demo
