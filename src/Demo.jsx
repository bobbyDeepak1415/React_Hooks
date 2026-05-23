import React, { useState } from "react";
import useFetchProds from "./useFetchProds";

const Demo = () => {
  const [status, setStatus] = useState("all");

  const { products } = useFetchProds("https://dummyjson.com/products");

  const filteredProducts =
    status === "all"
      ? products
      : products.filter((prod) => prod.category === status);

  const categories = Array.from(new Set(products.map((prod) => prod.category)));

  return (
    <div>
      <h2>Item List:</h2>

      <section>
        <select onChange={(e) => setStatus(e.target.value)}>
          <option>all</option>
          {categories.map((i) => {
            return <option value={i}>{i}</option>;
          })}
        </select>

        <ul>
          {filteredProducts.map((prod) => {
            return <li>{prod.title}</li>;
          })}
        </ul>
      </section>
    </div>
  );
};

export default Demo;
