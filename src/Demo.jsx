import React from 'react'
import useFetchProds from "./useFetchProds";

const Demo = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetchProds("https://dummyjson.com/products");

  if (loading) {
    return <div>Loading product titles...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
}

export default Demo
