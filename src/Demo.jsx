import React from 'react'

const Demo = () => {


  const handleClick=(e)=>{
    console.log(e)
    // alert("btn clicked")
  }

  const title="Bobby"

  const handleWelcome=()=>{
        console.log(`welcome ${title}`)

  }

  return (
    <div>
      <button  onClick={handleClick}>Click me baby</button>
      <button  onClick={(e)=>handleClick(e)}>Click me baby 2</button>
      <button  onClick={handleWelcome}>Welcome Bobby</button>
    </div>
  )
}

export default Demo
