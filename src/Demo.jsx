import React from "react";
import useFetchProds from "./useFetchProds";


let url="https://dummyjson.com/products"

const Demo = () => {

  const {products}=useFetchProds(url)

  const beautyProducts=products.filter(product=>product.category==="beauty")

  return <div>
    <h2>
      
      Products here:
      <section>
        <ul>

        {beautyProducts.map((item)=>{
          return <li>{item.title}</li>
        })}
        </ul>
      </section>
      </h2>

  </div>;
};

export default Demo;
