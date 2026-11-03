import React, { useState } from 'react'


const Loader=({boxes})=>{

let localArr=[]

for(let i=0;i<boxes;i++){
  localArr.push(i)
}



    return <div>
        {localArr.map((item,index)=>{
return <div key={index} name={item} className='box'></div>
        })}
    </div>
}
const LoaderComponent = () => {
    
  const [boxes,setBoxes]=useState([])


  return (
    <div className='container'>
      <input value={boxes} type='number' onChange={(e)=>setBoxes(e.target.value)}/>
      <Loader boxes={boxes}/>
    </div>
  )
}

export default LoaderComponent

