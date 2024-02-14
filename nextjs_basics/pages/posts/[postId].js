import { useRouter } from "next/router";
import React from "react";

function PostDetails({ post }) {
  //add this, if "fallback : true"
  //-------------
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading.....</h1>;
  }
  //-------------

  return (
    <div>
      <h1>Post Details : </h1>

      <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default PostDetails;

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  //   const paths = posts.map((post) => ({ params: { postId: `${post.id}` } }));
  //here we always have to make postId stringified, so we are writing inside benticks
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    // paths,
    // fallback:false,
    fallback: true,
    // fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  // console.log("context : ", context);
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();

  //add this, if "fallback : true"
  //-------------
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  //-------------

  // console.log(`Generating page for /posts/${params.postId}`);
  return {
    props: {
      post: data,
    },
  };
};

//if fallback : true, then we have to give a "if" condition above else it will give error:
//Error occurred prerendering page "/posts/[postId]". Read more: https://nextjs.org/docs/messages/prerender-error
//TypeError: Cannot read properties of undefined (reading 'title')
