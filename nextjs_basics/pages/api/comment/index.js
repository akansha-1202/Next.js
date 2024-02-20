import { comments } from "@/utils/data";

export default function handler(req, res) {
    if(req.method === "GET"){
         res.status(200).json(comments);
    } else if(req.method === "POST"){
         const { comment } = req.body;
         const newComments = {
           id: Date.now(),
           text: comment,
         };
         comments.push(newComments);
         res.status(200).json(newComments);
    }
}
