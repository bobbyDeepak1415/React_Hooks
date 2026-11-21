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
    <div style={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center",border:"1px solid black",padding:"auto",height:"50vh",width:"50vw",margin:"auto",gap:"30px",marginTop:"50px"}} className='container'>



  {colors.map((colour,index)=>{

const boxColour=activeIndex===index ? colour : "gray"

    return <div key={index} style={{height: "50px",width: "50px"}} className={boxColour} data-color={colour}></div>
  })}


    </div>
  )
}

export default Demo
