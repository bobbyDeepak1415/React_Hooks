import React from 'react'

const Demo = () => {


  const handleClick=(e)=>{
    console.log(e.target.value)
    alert("btn clicked")
  }

  return (
    <div>
      <button  onClick={handleClick}>Click me baby</button>
    </div>
  )
}

export default Demo
