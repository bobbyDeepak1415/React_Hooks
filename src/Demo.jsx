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
        {allProducts.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Demo;
