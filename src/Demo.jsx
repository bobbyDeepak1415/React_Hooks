import React from 'react'
import useFetchProds from './useFetchProds'

const Demo = () => {

  let url='https://dummyjson.com/products'

  const {products}=useFetchProds(url)

  return (
    <div>
      Hello
    </div>
  )
}

export default Demo
