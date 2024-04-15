import React, { useEffect, useState } from "react";
import AllProductCard from "./all-product-card";

const AllProducts = () => {
  const [productsData, setProductsData] = useState([]);

  console.log("products coming from state => ", productsData);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    console.log("the data response => ", response);

    // //the full data
    const products = await response.json();
    setProductsData(products);
    console.log("the products => ", products);
  };

  //   the use effect hook
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {productsData?.map((product) => (
        <AllProductCard key={product?.id} miles={product} />
      ))}
    </div>
  );
};

export default AllProducts;
