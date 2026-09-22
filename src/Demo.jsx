import React, { useState } from 'react'
import Child from './Child'

const Demo = () => {

  console.log("parent rendering")

  const [count,setCount]=useState(0)
  const [item,setItem]=useState("")

  return (
    <div>
      <h2>Parent count at:{count}</h2>
      
      <button onClick={()=>setCount(prev=>prev+1)}>+</button>

<input value={item} onChange={(e)=>setItem(e.target.value)}/>

      <div>
        <Child count={count}/>
      </div>
      
    </div>
  )
}

export default Demo
