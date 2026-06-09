import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchProds = (url) => {

  const [products,setProducts]=useState([])

  useEffect(()=>{
const fetchData=async()=>{
axios.get(url).then((res)=>{
setProducts(res.data.products)
})
}

fetchData()
  },[])

  return {products}
};

export default useFetchProds;
