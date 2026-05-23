import React from "react";
import useFetchProds from "./useFetchProds";


let url="https://dummyjson.com/products"

const Demo = () => {

  const {products}=useFetchProds(url)


const categories=products.map((product)=>product.category)

  const uniqueCategories=new Set(categories)

  

  return <div>
    <h2>
      
      Products here:
      <section>
        <select value={} onChange={}>
          {uniqueCategories.map((i)=>{
            return <option >{i}</option>
          })}


        </select>
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
