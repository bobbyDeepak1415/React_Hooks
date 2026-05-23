import React, { useState } from "react";
import useFetchProds from "./useFetchProds";

let url = "https://dummyjson.com/products";

const Demo = () => {
  const { products } = useFetchProds(url);

  const [status, setStatus] = useState("all");

  const uniqueCategories = Array.from(
    new Set(products.map((prod) => prod.category)),
  );

  const filteredProds =
    status === "all"
      ? products
      : products.filter((prod) => prod.category === status);

  return (
    <div>
      <h2>
        Products here:
        <section>
          <select onChange={(e) => setStatus(e.target.value)}>
            <option>all</option>
            {uniqueCategories.map((i) => {
              return <option value={i}>{i}</option>;
            })}
          </select>
          <ul>
            {filteredProds.map((item) => {
              return <li>{item.title}</li>;
            })}
          </ul>
        </section>
      </h2>
    </div>
  );
};

export default Demo;
