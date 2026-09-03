import React, { useState } from 'react'

const Demo = () => {

  const [item,setItem]=useState("")
  const [price,setPrice]=useState(0)
  const [itemList,setItemList]=useState([])

const handleAddItem=()=>{
  setItemList([...itemList,{name:item,price:Number(price)}])
  setItem("")
  setPrice("")
}

const total=itemList.reduce((acc,item)=>acc+item.price,0)


const handleDelete=(id)=>{

  const newArr=itemList.filter((_,i)=>i!==id)
  setItemList(newArr)

}

  
  return (
    <div style={{height:"100vh",width:"100vh",backgroundColor:"gray"}}>
      <h1>Groceries</h1>
      <input value={item} onChange={(e)=>setItem(e.target.value)}/>
      <input value={price} type='number'  onChange={(e)=>setPrice(e.target.value)}/>
      <button onClick={handleAddItem}>AddToCart</button>
<div>
  <ul>

  {itemList.map((item,id)=>{
    return <li key={id}>{item.name} <span>{item.price} <button onClick={()=>handleDelete(id)}>Delete</button></span></li>
  })}
  </ul>
  <p>Total:{total}</p>
</div>

    </div>
  )
}

export default Demo
