import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchProds = (url) => {
  const [prods, setProds] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setProds(response.data))
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log("failed To fetch", error);
      });
  }, []);

  return {prods};
};

export default useFetchProds;
