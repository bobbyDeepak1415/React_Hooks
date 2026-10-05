import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetchProds = (url) => {

const [products,setProducts]=useState([])


useEffect(()=>{
const fetchData=async()=>{
  try{

    const res=await axios.get(url)
    setProducts(res.products.data)
  }catch(err){
    console.error("failed to fetch...",err)
  }

}
fetchData()
},[url])

  return {products}
}

export default useFetchProds
