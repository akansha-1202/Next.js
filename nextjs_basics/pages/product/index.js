import React from 'react'
import Link from 'next/link';

//this is dynamic Routing
const ProductList = ({productId = 100, products}) => {
  return (
    <div>
      //Dynamic Routing
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
        <h1>
          <Link href={`/product/${productId}`}>Product {productId}</Link>
        </h1>
      </div>

      //Incremental Static Generation

      <div className=''>
         {
          products.map((product, index) => (
              <Link href={`/product/${product.id}`} key={index}>
                 <h1>{product.id}. {product.title}</h1>
              </Link>
          ))
         }
      </div>
    </div>
  );
}

export default ProductList


export const getStaticProps = async () => {
  const res = await fetch("http://localhost:4000/products");
  const data = await res.json();

  return {
    props: {
      products : data,
    },
  }
}


