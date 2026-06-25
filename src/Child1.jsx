import React, { useState } from 'react'

const Child1 = () => {

  const [count,setCount]=useState("")

  return (
    <div>
      <p>{count}</p>
      
    </div>
  )
}

export default Child1
