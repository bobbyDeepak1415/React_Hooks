import React from "react";
import useFetchProds from "./useFetchProds";


let url="https://dummyjson.com/products"

const Demo = () => {

  const {products}=useFetchProds(url)

  return <div>
    <h2>
      
      Products here:
      <section>
        <ul>

        {}
        </ul>
      </section>
      </h2>

  </div>;
};

export default Demo;
