import React, { useRef } from 'react'

const Demo = () => {

  const count=useRef(0)

  return (
    <div>
      <button onClick={()=>{
        count.current=count.current+1
        console.log(count.current)
      }}>Click</button>
    </div>
  )
}

export default Demo
