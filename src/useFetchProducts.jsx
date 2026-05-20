import { useState, useEffect } from "react";

function useFetchProds(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result.products);
    };

    fetchData();
  }, [url]);

  return data; // Just returning the raw array of products
}

export default useFetchProds;
