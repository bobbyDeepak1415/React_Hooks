import React from 'react'
import { useSelector } from 'react-redux'

const Demo = () => {

  const count=useSelector((state)=>state.counter.count)

  return (
    <div>
      <p>Count at:{count}</p>
      
    </div>
  )
}

export default Demo
