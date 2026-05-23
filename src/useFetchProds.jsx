import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchProds = (url) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      axios.get(url).then((response) => {
        setProducts(response.data.products);
      });
    } catch (er) {
      console.log("failed to fetch", er);
    }
  }, []);

  return { products };
};

export default useFetchProds;
