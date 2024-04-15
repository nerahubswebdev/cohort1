import React from "react";
import Hero from "../components/home-components/hero";
import AllProducts from "../components/home-components/all-products";
import Products from "../components/home-components/products";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AllProducts />
      <Products />
    </div>
  );
};

export default HomePage;
