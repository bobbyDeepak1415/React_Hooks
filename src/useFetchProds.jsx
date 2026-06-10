import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchProds = (url) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get(url).then((res) => {
          setProducts(res.data.products || res.data);
        });
      } catch (err) {
        console.log("failed to fetch", err);
      }
    };

    fetchData();
  }, []);

  return { products };
};

export default useFetchProds;
