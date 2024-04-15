import React, { useEffect, useState } from "react";
import ProductCard from "./product-card";

const Products = () => {
  const [something, setSomething] = useState([]);

  //something that stores information

  console.log("products coming from state => ", something);

  const fetchData = async () => {
    const anything = await fetch("https://fakestoreapi.com/products");

    const products = await anything.json();

    setSomething(products);

    console.log("list of products => ", products);
  };

  //   the use effect hook makes an action run immediately on page load
  useEffect(() => {
    fetchData();
  }, []); //[] is called dependency array, once the array is empty it just runs once

  return (
    <div className="g">
      {something.map((product) => (
        <ProductCard key={product.id} product={product} somethingelse="miles" />
      ))}
    </div>
  );
};

export default Products;

//const response = await fetch("https://fakestoreapi.com/products");
// console.log("the data response => ", response);

// // //the full data
// const products = await response.json();
// setProductsData(products);
// console.log("the products => ", products);
