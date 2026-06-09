import React from "react";
import useFetchProds from "./useFetchProds";

const Demo = () => {


    
const { products: allProducts } = useFetchProds(
  "https://dummyjson.com/products",
);

  

  return (
    <div>
      <h2>Products:</h2>
      <ul>
        {allProducts}
      </ul>
    </div>
  );
};

export default Demo;
