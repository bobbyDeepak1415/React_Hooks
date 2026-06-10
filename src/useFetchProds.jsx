import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchProds = (url) => {
  const [products, setProducts] = useState([]);

  const MAX_TRIES = 3;

  useEffect(() => {
    const fetchData = async (attemptsLeft) => {
      try {
        axios.get(url).then((res) => {
          setProducts(res.data.products || res.data);
        });
      } catch (err) {
        if (attemptsLeft > 1) {
          console.log(`failed to fetch,attemptsLeft:${attemptsLeft - 1}`);
          fetchData(attemptsLeft - 1);
        } else {
          console.log(`failed to fetch after ${MAX_TRIES} times`, err);
        }
      }
    };

    fetchData(MAX_TRIES);
  }, []);

  return { products };
};

export default useFetchProds;
