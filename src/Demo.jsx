import React from 'react'
import useFetchProds from './useFetchProds'

const Demo = () => {

  const url="https://dummyjson.com/products"

  const {products}=useFetchProds(url)
  return (
    <div>
      <h1>Your products list here:</h1>


    </div>
  )
}

export default Demo
