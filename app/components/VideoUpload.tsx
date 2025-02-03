"use client";
import { useState } from "react";

type Video = {
  title: string;
  url: string;
  description: string;
};

type VideoUploadProps = {
  onUpload: (video: Video) => void;
};

export default function VideoUpload({ onUpload }: VideoUploadProps) {
  const [title, setTitle] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const videoData: Video = { title, url, description };

    try {
      const response = await fetch("/api/videos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(videoData),
      });

      if (response.ok) {
        const data = await response.json();
        onUpload(data.video); // Update the video list in the parent component
        setTitle("");
        setUrl("");
        setDescription("");
      } else {
        console.error("Error uploading video:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">Upload a New Video</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Video Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <input
          type="url"
          placeholder="Video URL (MP4)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <textarea
          placeholder="Video Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 border rounded"
          required
        ></textarea>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Upload Video
        </button>
      </form>
    </div>
  );
}
