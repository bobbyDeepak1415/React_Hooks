import React, { useCallback, useState } from 'react'
import Child1 from './Child1'

// import handleClick from './handleClick'

const Demo = () => {



console.log('parent rendering')  

  const [count,setCount]=useState(0)
  const [item,setItem]=useState("")

  const handleClick=useCallback(()=>{
    console.log('handleClick recreated')
    setCount(prev=>prev+1)
  },[])




  return (
    <div>
      <input value={item} onChange={(e)=>setItem(e.target.value)}/>
      
      <h1>Parent count at:{count}</h1>
      <button onClick={handleClick}>Increment</button>
      <Child1 count={count}/>
    </div>
  )
}

export default Demo
