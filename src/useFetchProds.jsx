import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchProds = (url) => {
  const [products, setProducts] = useState([]);

  const MAX_TRIES=3

  useEffect(() => {
    const fetchData = async (triesLeft) => {
      for(let i=0;i<triesLeft;i++){
  if(triesLeft<3){
    console.log(`failed to fetch, triesLeft=${triesLeft-1}`)
    fetchData(triesLeft-1)
  }else if(triesLeft>=3){

  }
      }
    };
    
    fetchData(MAX_TRIES);
  }, []);
  
  return { products };
};

export default useFetchProds;

// await axios
//   .get(url)
//   .then((res) => {
//     setProducts(res.data.products);
//   })
//   .catch((err) => {
//     console.log("failed to fetch", err);
//   });