import React from 'react'
import Link from 'next/link';
import Layout from '@/components/Layout';
//this folder is for nested routing
const Blog = () => {
  return (
    <Layout>
      <Link href="/">Home</Link>
      <h1>Main Blog : localhost:3000/blog</h1>
    </Layout>
  );
}

export default Blog

//If we have to make nested routes then its necessary to make "index.js" file for parent route of that folder
