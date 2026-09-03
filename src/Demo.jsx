import React, { useState } from 'react'

const Demo = () => {

  const [item,setItem]=useState("")
  const [price,setPrice]=useState(0)
  const [itemList,setItemList]=useState([])

  return (
    <div>
      <h1>Groceries</h1>
      <input value={item} onChange={(e)=>setItem(e.target.value)}/>
      <input value={price} onChange={(e)=>setPrice(e.target.value)}/>
      <button>AddToCart</button>
<div>
  <ul>

  {itemList.map((item)=>{
    return <li>{}</li>
  })}
  </ul>
</div>

    </div>
  )
}

export default Demo
