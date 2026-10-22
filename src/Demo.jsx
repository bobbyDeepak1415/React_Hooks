import React from 'react'

const Demo = () => {


  const handleClick=(e)=>{
    console.log(e.type)
    alert("btn clicked")
  }

  return (
    <div>
      <button  onClick={handleClick}>Click me baby</button>
    </div>
  )
}

export default Demo
