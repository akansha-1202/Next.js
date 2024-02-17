import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ProductDetails = ({ product }) => {
  const router = useRouter(); //giving router object
  const productDetail = router.query.productId; //it containing property "query"
  // name that is given in file "productId" should be same

  if (router.isFallback) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <div>Product Detail is {productDetail}</div>
      <div>
        ID : {product.id} <br />
        TITLE : {product.title}
        <br />
        PRICE : {product.price}
        <br />
        DESCRIPTION OF Product: {product.description}
      </div>
      <Link href="/">
        <button>Back To Home</button>
      </Link>
    </div>
  );
};

//productId can be any string or number in form of string
export default ProductDetails;

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          productId: "1",
        },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  console.log(`regenetaing in ${params.productId} `);
  const res = await fetch(`http://localhost:4000/products/${params.productId}`);
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
};
