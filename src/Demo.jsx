import React, { useState } from 'react'

const Demo = () => {

  const [count,setCount]=useState(0)



  return (
    <div>
      <h1>Parent count is at:{count}</h1>
    </div>
  )
}

export default Demo
