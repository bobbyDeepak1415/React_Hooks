import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetchProds = (url) => {

  const [products,setProducts]=useState([])


  useEffect(()=>{
const fetchProducts=async()=>{
  try{

    const response=await axios.get(url)
    setProducts(response.data.products)
  }catch(err){
    console.log("failed to fetch...",err)
  }

}

fetchProducts()

  },[url])

  return {products}
}

export default useFetchProds
