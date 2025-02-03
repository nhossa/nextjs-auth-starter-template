"use client";

import { useState } from "react";

export default function UploadVideo() {
  const [video, setVideo] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideo(URL.createObjectURL(file)); // Simulating upload
    }
  };

  return (
    <div>
      <h2>Upload Video</h2>
      <input type="file" accept="video/*" onChange={handleUpload} />
      {video && <video src={video} controls width="500" />}
    </div>
  );
}
