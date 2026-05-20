import React from "react";
import useFetchProds from "./useFetchProds";

const Demo = () => {
  // 1. Call the hook and get the data array directly
  const products = useFetchProds("https://dummyjson.com/products");

  // 2. Render the titles directly
  return (
    <div>
      <h2>Product Titles</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Demo;
