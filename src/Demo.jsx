import React, { useState } from "react";
import useFetchProds from "./useFetchProds";

const Demo = () => {
  const [item, setItem] = useState("");

  const url = "https://dummyjson.com/products";

  const { products } = useFetchProds(url);

  const filteredProducts = item.trim()
    ? products.filter((product) =>
        product.title.toLowerCase().includes(item.trim().toLocaleLowerCase()),
      )
    : products;

  return (
    <div>
      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="search..."
      />
      <h2>Your products here:</h2>

      <ul>
        {filteredProducts.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Demo;
