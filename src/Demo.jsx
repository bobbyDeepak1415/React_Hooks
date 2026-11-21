import { useEffect, useState } from 'react'

import './Demo.css'

const Demo = () => {


  const colors=["green","orange","red"]


  const [activeIndex,setActiveIndex]=useState(0)


  useEffect(()=>{
    
   let timer=setInterval(()=>{

      setActiveIndex(prev=>(prev+1)%colors.length)
    },1000)

    return ()=>clearInterval(timer)

  },[])




  return (
    <div className='container'>

{colors.map((colour,index)=>{
const boxColour=activeIndex===index ? colour : "gray"
  return <div name={colour} key={index} style={{height:"50px",width:"50px",backgroundColor:boxColour}}></div>
})}
  

    </div>
  )
}

export default Demo
