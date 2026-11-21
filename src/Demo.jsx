import React, { useState } from 'react'

const Demo = () => {

  const [boxNums,setBoxNums]=useState(0)

  const count=parseInt(boxNums) || 0

  const localArr=Array.from({length:count})

  return (
    <div>
    <input value={boxNums} onChange={(e)=>setBoxNums(e.target.value)}/>

<div>

  {localArr.map((box,index)=>{
    return <div key={index} name={box}></div>
  })}
</div>


    </div>
  )
}

export default Demo

