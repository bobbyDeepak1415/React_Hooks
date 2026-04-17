import React, { useState } from 'react'

const Demo = () => {

  const [count,setCount]=useState(0)
  const [nums,setNums]=useState([])

  return (
    <div>
      <p>count at: {count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <div>
        {nums.map((num)=>{
          return <li>{num}</li>
        })}
      </div>
      
    </div>
  )
}

export default Demo
