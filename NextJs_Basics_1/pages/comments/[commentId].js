import { comments } from "@/utils/data";
import React from "react";

function Comment({ comment }) {
  return (
    <div>
      {comment.id}. {comment.text}
    </div>
  );
}

export default Comment;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: "1" } },
      { params: { commentId: "2" } },
      { params: { commentId: "3" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { commentId } = context.params;
  console.log(commentId);

  //we should not call our own API routes for pre-rendering content
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  return {
    props: { comment },
  };
}
