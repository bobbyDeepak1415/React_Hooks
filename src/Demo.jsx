import React from 'react'
import useFetchProds from './useFetchProds';



let url = "https://dummyjson.com/products";
const Demo = () => {

  const {prods}=useFetchProds(url)





  return (
    <div>
      <h1>
        Hello
      </h1>
      <div>
        {}

      <h2>Products list</h2>
      <ul>

      {prods.map((product)=>{
        return <li key={product.id}>{product.title}</li>
      })}
      </ul>
      </div>
    </div>
  )
}

export default Demo
