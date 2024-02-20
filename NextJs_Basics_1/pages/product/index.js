import React from "react";
import Link from "next/link";
import Layout from "@/components/Layout";

//Dynamic Routing, Incremental Static Generation, Revalidation with ISR
const ProductList = ({ productId = 100, products }) => {
  return (
    <Layout>
      <div className="bg-blue-300">
        <Link href="/">Home</Link>
        <h1>
          <Link href="/product/1">Product 1</Link>
        </h1>
        <h1>
          <Link href="/product/2" replace>
            Product 2
          </Link>
        </h1>
        Dynamic Routing
        <h1>
          <Link href={`/product/${productId}`}>Product {productId}</Link>
        </h1>
      </div>
      Incremental Static Generation
      <div className="">
        {products.map((product, index) => (
          <Link href={`/product/${product.id}`} key={index}>
            <h1>
              {product.id}. {product.title} {product.price}
            </h1>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default ProductList;

export const getStaticProps = async () => {
  // console.log("Generating / Regenerating....");
  const res = await fetch("http://localhost:4000/products");
  const data = await res.json();

  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
};
