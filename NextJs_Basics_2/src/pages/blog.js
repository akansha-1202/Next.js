import { getSession } from "next-auth/react";
import React from "react";

function Blog({ data }) {
  return (
    <div>
      <h1>BLOGS</h1>
      <h4>{data}</h4>
    </div>
  );
}

export default Blog;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=${process.env.NEXT_PUBLIC_API_URL}/blog`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: session
        ? "Show list of 100 movies"
        : "You are not authorized person",
    },
  };
};
