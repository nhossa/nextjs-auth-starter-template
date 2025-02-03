"use client";
import { useState } from "react";

type VideoProps = {
  title: string;
  url: string;
  description: string;
};

export default function LikeComment({ title, url, description }: VideoProps) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg w-96">
      <h3 className="text-lg font-semibold">{title}</h3>
      <video src={url} controls className="w-full h-64 rounded-lg my-2" />
      <p className="text-gray-500">{description}</p>

      <button onClick={() => setLikes(likes + 1)} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        ❤️ {likes} Likes
      </button>

      <div className="mt-4">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full p-2 border rounded"
        />
        <button onClick={addComment} className="mt-2 px-4 py-2 bg-green-500 text-white rounded">
          Comment
        </button>
      </div>

      <ul className="mt-2 text-sm text-gray-600">
        {comments.map((comment, index) => (
          <li key={index} className="border-b py-1">{comment}</li>
        ))}
      </ul>
    </div>
  );
}
