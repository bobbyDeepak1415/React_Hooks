import React from 'react'
import useFetchProds from './useFetchProds'

const url="https://dummyjson.com/products"
const Demo = () => {

  const {products}=useFetchProds(url)

  return (
    <div style={{height:"100vh",width:"100vw",backgroundColor:"gray"}}>
      <h2>Products List:</h2>
      <ul>

      {products.map((product)=>{
        return <li key={product.id}>{product.title}</li>
      })}
      </ul>
    </div>
  )
}

export default Demo
