import React, { useEffect, useState } from "react";

const useFetchProds = (url) => {
  const [prods, setProds] = useState([]);

  useEffect(() => {
    const fetchProds = async () => {
      const response = await fetch(url);
      const products = await response.json();
      setProds(products);
    };

    fetchProds();
  }, [url]);

  return { prods };
};

export default useFetchProds;
