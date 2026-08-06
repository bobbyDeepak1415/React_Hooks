import React, { useEffect, useState } from "react";

const useFetchProds = (url) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        const res = await response.json();
        setProducts(res.products);
      } catch (er) {
        console.log("failed...", er);
      }
    };

    fetchProducts();
  }, [url]);

  return { products };
};

export default useFetchProds;
