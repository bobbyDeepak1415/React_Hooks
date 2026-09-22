import React, { useState } from 'react'
import useFetchProds from './useFetchProds'

const Demo = () => {

  let url='https://dummyjson.com/products'

  const {products}=useFetchProds(url)

  const [item,setItem]=useState("")


  const filteredProducts=products.filter((product)=>product.title.toLowerCase().includes(item.toLowerCase()))

  return (
    <div>
      <h1>Products list here:</h1>
      <input value={item} onChange={(e)=>setItem(e.target.value)}/>

      {item.length?(

<ul>

        

      {filteredProducts.map((product)=>{
        return <li key={product.id}>{product.title}</li>
      })}
      </ul>
      ):(
        <p>Search here:</p>
      )}
      
    </div>
  )
}

export default Demo
