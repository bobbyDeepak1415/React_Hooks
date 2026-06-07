import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchProds = (url) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData= async () => {
      try {
        const res = await axios.get(url);

        setProducts(res.data);
      } catch (err) {
        console.log("failed to fetch", err);
      }
    };

    fetchData();
  }, []);

  return { products };
};

export default useFetchProds;
