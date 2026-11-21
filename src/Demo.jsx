import { useEffect, useState } from 'react'

import './Demo.css'

const Demo = () => {


  const colors=["green","orange","red"]


  const [activeIndex,setActiveIndex]=useState(0)


  useEffect(()=>{
    
    setInterval(()=>{

      setActiveIndex(prev=>(prev+1)%colors.length)
    },1000)

  },[])


  return (
    <div className='container'>



  {colors.map((box,index)=>{

const boxColour=activeIndex===index ? colors[index] : "gray"

    return <div key={index} className={boxColour} name={box}></div>
  })}


    </div>
  )
}

export default Demo

