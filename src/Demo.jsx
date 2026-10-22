import React from 'react'

const Demo = () => {

  const handleClick=()=>{
    alert("btn clicked")
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Demo
