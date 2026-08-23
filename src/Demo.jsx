import React, { useState } from 'react'

const Demo = () => {

  const [count,setCount]=useState(0)

  return (
    <div>
      <p>count is at :{count}</p>
    </div>
  )
}

export default Demo
