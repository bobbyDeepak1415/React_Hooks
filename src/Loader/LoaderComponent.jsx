import React, { useState } from 'react'
import './LoaderComponent.css';

const Loader=({boxes})=>{

let localArr=[]

const count = parseInt(boxes) || 0;

for(let i=0;i<count;i++){
  localArr.push(i)
}




    return <div className='box_div'>
        {localArr.map((item,index)=>{
return <div key={index} name={item} className='box'></div>
        })}
    </div>
}
const LoaderComponent = () => {
    
  const [boxes,setBoxes]=useState(0)


  return (
    <div className='container'>
      <input value={boxes} type='number' onChange={(e)=>setBoxes(e.target.value)}/>
      <Loader boxes={boxes}/>
    </div>
  )
}

export default LoaderComponent

