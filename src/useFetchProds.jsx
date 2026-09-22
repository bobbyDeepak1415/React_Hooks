import React, { useEffect, useState } from 'react'

const useFetchProds = (url) => {

  const [products,setProducts]=useState([])


  useEffect(()=>{
const fetchProds=async()=>{

  const res=await fetch(url)
  const response=await res.json()

}

fetchProds()
  },[url])

  return (
    <div>
      Hello
    </div>
  )
}

export default useFetchProds
