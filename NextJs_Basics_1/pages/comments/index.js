import Layout from "@/components/Layout";
import React, { useState } from "react";

function Comments() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const res = await fetch(`/api/comment`);
    const data = await res.json();
    setComments(data);
  };

  const addComments = async () => {
    const res = await fetch(`/api/comment`, {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = res.json();
    console.log("data : ", data);
    setComment("");
  };

  const deleteComment = async (commentId) => {
    const res = await fetch(`/api/comment/${commentId}`, { method: "DELETE" });
    const data = await res.json();
    console.log("deletedCOmment : ", data);
    getComments();
  };

  const updateComment = async (commentId, currentText) => {
    const updatedText = prompt("Enter the updated comment:", currentText);
    if (updatedText !== null) {
      try {
        const res = await fetch(`/api/comment/${commentId}`, {
          method: "PATCH",
          body: JSON.stringify({ text: updatedText }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.ok) {
          // Update the UI immediately after successful response
          const updatedComment = await res.json(); // Assuming backend returns updated comment
          const updatedComments = comments.map((comment) =>
            comment.id === updatedComment.id ? updatedComment : comment
          );
          console.log("updated : ", updatedComment);
          setComments(updatedComments); // Update the state with updated comments
        } else {
          console.error("Failed to update comment");
        }
      } catch (error) {
        console.error("Error updating comment:", error);
      }
    }
  };

  return (
    <Layout className="flex flex-col gap-4">
      <div>
        <h1>Add Comments</h1>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border"
        />
        <button
          onClick={addComments}
          className="border border-blue-500 bg-blue-200 rounded-[5px] px-2"
        >
          Add
        </button>
      </div>
      <div>
        <h1>
          All Comments
          <button
            onClick={getComments}
            className="border border-green-500 bg-green-200 rounded-[5px] px-2"
          >
            Load Comments
          </button>
        </h1>

        <div>
          {comments?.map((item, index) => (
            <h1 key={index}>
              {index + 1}. {item.text}{" "}
              <button
                className="border border-red-500 bg-red-200 rounded-[5px] px-2"
                onClick={() => deleteComment(item.id)}
              >
                DELETE
              </button>
              <button
                className="border border-yellow-500 bg-yellow-200 rounded-[5px] px-2"
                onClick={() => updateComment(item.id, item.text)}
              >
                UPDATE
              </button>
            </h1>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Comments;
