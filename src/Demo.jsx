import React, { useCallback, useMemo, useState } from 'react'
import Child1 from './Child1'

import handleClick from './handleClick'

const Demo = () => {



console.log('parent rendering')  

  const [count,setCount]=useState(0)
  const [item,setItem]=useState("")

  const memoizedClick=useCallback(()=>{
    console.log('handleClick recreated')
    handleClick(setCount)
  },[setCount])
  
  const expensiveValue= useMemo(()=>{
    console.log('value recalculated')
return count*1000
  },[count])

  const setName=()=>{
    console.log(name)
  }


  return (
    <div>
      <p>Expensive value:{expensiveValue}</p>
      <input value={item} onChange={(e)=>setItem(e.target.value)}/>
      
      <h1>Parent count at:{count}</h1>
      <button onClick={memoizedClick}>Increment</button>
      <Child1 setName={setName} count={count}/>
      <button onClick={()=>{
        console.log(name)
      }}>Print Name</button>
    </div>
  )
}

export default Demo
