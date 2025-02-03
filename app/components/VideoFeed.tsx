"use client";
import { useEffect, useState } from "react";
import { Video } from "next-video";

type VideoData = {
  title: string;
  url: string;
  description: string;
};

export default function VideoFeed() {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/recommendations")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (data && data.data && data.data.Get && data.data.Get.Video) {
          setVideos(data.data.Get.Video);
        } else {
          throw new Error("Invalid API response format");
        }
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
        setError("Failed to load videos.");
      });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold my-4">PopReel Video Feed</h2>
      {error && <p className="text-red-500">{error}</p>}
      {videos.length === 0 && !error ? <p>Loading videos...</p> : null}
      {videos.map((video, index) => (
        <div key={index} className="mb-8 border border-gray-300 p-4 rounded-lg shadow-lg">
          <h3 className="font-semibold">{video.title}</h3>
          <Video
            src={video.url}
            width={400}
            height={300}
            autoPlay={false}
            controls
            loop
            poster="/default-thumbnail.jpg" // Add a default poster image
            className="rounded-lg"
          />
          <p className="text-sm text-gray-600">{video.description}</p>
        </div>
      ))}
    </div>
  );
}
