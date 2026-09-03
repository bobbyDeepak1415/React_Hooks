import React, { useState } from 'react'

const Demo = () => {

  const [item,setItem]=useState("")
  const [price,setPrice]=useState(0)
  const [itemList,setItemList]=useState([])


  const handleAddItem=(item,price)=>{
    
    setItemList([...itemList,{name:item,price:price}])


  }

  return (
    <div>
      <h1>Groceries</h1>
      <input value={item} onChange={(e)=>setItem(e.target.value)}/>
      <input value={price} onChange={(e)=>setPrice(e.target.value)}/>
      <button onClick={()=>handleAddItem(item,price)}>AddToCart</button>
<div>
  <ul>

  {itemList.map((item,id)=>{
    return <li key={id}>{item.name} <span>{item.price}</span></li>
  })}
  </ul>
</div>

    </div>
  )
}

export default Demo
