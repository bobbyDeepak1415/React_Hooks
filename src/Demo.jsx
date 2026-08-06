import React from 'react'
import useFetchProds from './useFetchProds';

const Demo = () => {

  const url = "https://dummyjson.com/products";

  const {products}=useFetchProds(url)

  return (
    <div>
      <h2>Your products here:</h2>

      <ul>
        {products.map((product)=>{
          return <li key={product.id}>{product.title}</li>
        })}
      </ul>
      
    </div>
  )
}

export default Demo
