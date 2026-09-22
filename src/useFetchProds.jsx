import React, { useEffect, useState } from 'react'

const useFetchProds = (url) => {

  const [products,setProducts]=useState([])


  useEffect(()=>{
const fetchProds=async()=>{

  const res=await fetch(url)
  const response=await res.json()
  console.log(response.products)
  setProducts(response.products)

}

fetchProds()
  },[url])

  return {products}
}

export default useFetchProds
