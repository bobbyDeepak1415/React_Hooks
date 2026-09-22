import React, { useCallback, useMemo, useState } from 'react'
import Child from './Child'

const Demo = () => {

  console.log("parent rendering")

  const [count,setCount]=useState(0)
  const [item,setItem]=useState("")

  
  const memoizedClick=useCallback(()=>{

  },[setCount])

  const expensiveValue=useMemo(()=>{
return count*1000
  },[])

  return (
    <div>
      <h2>Parent count at:{count}</h2>
      <p>Expensive Value:{expensiveValue}</p>
      
      <button onClick={()=>setCount(prev=>prev+1)}>+</button>

<input value={item} onChange={(e)=>setItem(e.target.value)}/>


      <div>
        <Child count={count}/>
      </div>
      
    </div>
  )
}

export default Demo
