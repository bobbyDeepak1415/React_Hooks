import React, { useEffect, useState } from 'react'

const useFetchProds = (url) => {

const [products,setProducts]=useState([])


useEffect(()=>{
const fetchData=async()=>{
  try{

    const res=await fetch(url)
    const response=await res.json()
    setProducts(response.products)
  }catch(err){
    console.error("failed to fetch...",err)
  }

}
fetchData()
},[url])

  return {products}
}

export default useFetchProds
