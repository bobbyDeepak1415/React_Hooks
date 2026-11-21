import { useEffect, useState } from 'react'

import './Demo.css'

const Demo = () => {


  const colors=["green","orange","red"]


  const [activeIndex,setActiveIndex]=useState(0)


  useEffect(()=>{
    
    setInterval(()=>{

      setActiveIndex(prev=>(prev+1)%colors.length)
    },1000)

  },[colors])


  return (
    <div className='container'>



  {colors.map((colour,index)=>{

const boxColour=activeIndex===index ? colour : "gray"

    return <div key={index} className={boxColour} name={colour}></div>
  })}


    </div>
  )
}

export default Demo
