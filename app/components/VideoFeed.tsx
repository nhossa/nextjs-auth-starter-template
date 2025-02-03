"use client";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import VideoUpload from "./VideoUpload";
import LikeComment from "./LikeComment";

type Video = {
  title: string;
  url: string;
  description: string;
};

export default function VideoFeed() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/videos")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data && data.data.Get && data.data.Get.Video) {
          setVideos(data.data.Get.Video);
        }
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
        setError("Failed to load videos.");
      });
  }, []);

  const handleUpload = (newVideo: Video) => {
    setVideos((prevVideos) => [newVideo, ...prevVideos]); // Add new video to feed
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold my-4">PopReel Video Feed</h2>

      {/* ✅ Video Upload Form */}
      <VideoUpload onUpload={handleUpload} />

      {error && <p className="text-red-500">{error}</p>}
      {videos.length === 0 && !error ? <p>Loading videos...</p> : null}

      {videos.map((video, index) => (
        <div key={index} className="mb-8 border border-gray-300 p-4 rounded-lg shadow-lg w-[500px]">
          <h3 className="font-semibold">{video.title}</h3>
          <ReactPlayer url={video.url} controls width="100%" height="300px" playing={false} loop />
          <p className="text-sm text-gray-600">{video.description}</p>

          {/* ✅ Add Like & Comment Component for each video */}
          <LikeComment title={video.title} url={video.url} description={video.description} />
        </div>
      ))}
    </div>
  );
}
