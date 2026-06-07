import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchProds = (url) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const MAX_TRIES = 3;
    const fetchData = async (attemptsLeft) => {
      await axios
        .get(url)
        .then((res) => {
          setProducts(res.data);
        })

        .catch((err) => {
          if (attemptsLeft > 1) {
            console.log(
              `attempted failed. Retrying...(${attemptsLeft - 1}left)`,
              err,
            );
            fetchData(attemptsLeft - 1);
          } else {
            console.log(`failed to fetch after...(${MAX_TRIES}attempts)`, err);
          }
        });
    };

    fetchData(MAX_TRIES);
  }, []);

  return { products };
};

export default useFetchProds;
