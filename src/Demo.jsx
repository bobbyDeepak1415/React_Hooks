import React, { useState } from 'react'
import useFetchProds from './useFetchProds'

const url="https://dummyjson.com/products"
const Demo = () => {

const [item,setItem]=useState("")

  const {products}=useFetchProds(url)

  const filteredProducts=products.filter((product)=>product.title.toLowerCase().includes(item.toLowerCase()))

  return (
    <div style={{height:"100vh",width:"100vw",backgroundColor:"gray"}}>
      <h2>Products List:</h2>
      <input value={item} onChange={(e)=>setItem(e.target.value)}/>
      <ul>

      {filteredProducts.map((product)=>{
        return <li key={product.id}>{product.title}</li>
      })}
      </ul>
    </div>
  )
}

export default Demo
