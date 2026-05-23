import React, { useState } from "react";
import useFetchProds from "./useFetchProds";

let url = "https://dummyjson.com/products";

const Demo = () => {
  const { products } = useFetchProds(url);

  

  const [status, setStatus] = useState("all");

  // const categories = products.map((product) => product.category);

  const uniqueCategories = Array.from(new Set(products.map((prod=>prod.category))))

  

  return (
    <div>
      <h2>
        Products here:
        <section>
          <select onChange={(e) => setStatus(e.target.value)}>
            
            <option>all</option>
            {uniqueCategories.map(i=>{
              return <option value={status}>{i}</option>
            })}
          </select>
          <ul>
            {products.map((item) => {
              return <li>{item.title}</li>;
            })}
          </ul>
        </section>
      </h2>
    </div>
  );
};

export default Demo;
