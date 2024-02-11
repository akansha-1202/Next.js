import Link from "next/link";
import React from "react";

function Posts({ posts }) {
  return (
    <div>
      <h1>List Of Posts : </h1>
      <ul>
        {posts?.map((post, index) => (
          <li key={index}>
            <Link href={`/posts/${post.id}`}>
              {post.id}. {post.title.toUpperCase()}
            </Link>
            <hr />
          </li>
        ))}
      </ul>

      <div>
        <Link href="/">Back To Home</Link>
      </div>
    </div>
  );
}

export default Posts;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      posts: data.slice(0, 10),
    },
  };
};
