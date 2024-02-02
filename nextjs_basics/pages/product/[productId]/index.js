import { useRouter } from "next/router";
import React from "react";

const ProductDetails = () => {
  const router = useRouter(); //giving router object
  const productDetail = router.query.productId; //it containing property "query"
  // name that is given in file "productId" should be same
  return <div>Product Detail is {productDetail}</div>;
};

//productId can be any string or number in form of string
export default ProductDetails;
