import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productId } = useParams();

  console.log("the params => ", productId);

  const [productsData, setProductsData] = useState();

  console.log("products coming from state => ", productsData);

  const fetchData = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );
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
      <p>hi</p>
      <p>{productsData?.title}</p>
    </div>
  );
};

export default ProductPage;
