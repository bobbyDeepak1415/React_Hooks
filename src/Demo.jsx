import React, { useEffect, useState } from 'react'

import './Demo.css'

const Demo = () => {

  const [boxNums,setBoxNums]=useState(0)

  const [activeIndex,setActiveIndex]=useState(0)

  const count=parseInt(boxNums) || 0

  const localArr=Array.from({length:count})


  useEffect(()={

  },[])

  return (
    <div className='container'>
    <input value={boxNums} onChange={(e)=>setBoxNums(e.target.value)}/>

<div className='box_Container'>

  {localArr.map((box,index)=>{

const boxColour=

    return <div key={index} className='box' name={box}></div>
  })}
</div>


    </div>
  )
}

export default Demo

