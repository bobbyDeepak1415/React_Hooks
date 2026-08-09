import React from 'react'
import useFetchProds from './useFetchProds'

const Demo = () => {

  const {item,setItem}=useFetchProds()

  return (
    <div>
      <input value={item} onChange={(e)=>setItem(e.target.value)}/>
    </div>
  )
}

export default Demo
