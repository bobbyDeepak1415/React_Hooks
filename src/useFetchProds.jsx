import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchProds = (url) => {
  const [products, setProducts] = useState([]);

  const MAX_TRIES = 3;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setProducts(res.data.products);
      } catch (err) {
        console.log("failed to fetch", err);
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
