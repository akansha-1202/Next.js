import { comments } from "@/utils/data";

export default function handler(req, res) {
  if (req.method === "GET") {
    const { commentId } = req.query;
    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const { commentId } = req.query;

    const index = comments.findIndex(
      (comment) => comment.id === parseInt(commentId)
    );

    const deletedComment = comments.splice(index, 1);

    res.status(200).json(deletedComment);
  } else if (req.method === "PATCH") {
      const { commentId } = req.query;
      const { text } = req.body; // Assuming body contains the updated comment text
      console.log(text);
      // Find the index of the comment in the array
      const index = comments.findIndex(
        (comment) => comment.id === parseInt(commentId)
      );

      if (index !== -1) {
        // Update the comment text in the database
        comments[index].text = text;
        // Return the updated comment as response
        res.status(200).json(comments[index]);
      } else {
        // Comment with given ID not found
        res.status(404).json({ message: "Comment not found" });
      }
  }
}
