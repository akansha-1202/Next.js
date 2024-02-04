import React from 'react'
import Link from 'next/link';

//this is dynamic Routing
const ProductList = ({productId = 100}) => {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>
        <Link href="/product/1">Product 1</Link>
      </h1>
      <h1>
        <Link href="/product/2" replace>
          Product 2
        </Link>
      </h1>
      <h1>
        <Link href={`/product/${productId}`}>Product {productId}</Link>
      </h1>
    </div>
  );
}

export default ProductList


