import React, { useEffect, useState } from 'react'
import handleClick from './handleClick'

const Demo = () => {

  const [products,setProducts]=useState([])
  const [item,setItem]=useState("")
  const [localValue,setLocalValue]=useState("")
  const url="https://dummyjson.com/products"

useEffect(()=>{
const fetchProducts=async()=>{
  try{

    const res=await fetch(url)
    const response=await res.json()
    setProducts(response.products)
  }catch(err){
console.log("failed to fetch...",err)
  }
}
fetchProducts()
},[url])




const filteredProducts=products.filter((product)=>product.title.toLowerCase().includes(item.toLowerCase()))


  return (
    <div>
      <input value={localValue} onChange={handleChange}/>
      <h2>Your products here:</h2>
      <ul>
        {filteredProducts.map((product)=>{
          return <li key={product.id}>{product.title}</li>
        })}
      </ul>
    </div>
  )
}

export default Demo
