import { NextResponse } from "next/server";

// User-uploaded videos
const userUploadedVideos = [
  {
    title: "Sunset Timelapse",
    url: "https://cdn.pixabay.com/video/2017/09/21/14133-294656133_large.mp4",
    description: "A beautiful sunset timelapse.",
  },
  {
    title: "City Traffic",
    url: "https://cdn.pixabay.com/video/2021/02/25/66598-515629632_large.mp4",
    description: "City traffic during rush hour.",
  }
];

// Recommended videos
const recommendedVideos = [
  {
    title: "Nature Walk",
    url: "https://cdn.pixabay.com/video/2022/10/24/136076-857415993_large.mp4",
    description: "A peaceful walk through the forest.",
  },
  {
    title: "Ocean Waves",
    url: "https://cdn.pixabay.com/video/2017/06/22/9465-295176288_large.mp4",
    description: "Relaxing ocean waves crashing on the shore.",
  }
];

// Combine user-uploaded and recommended videos
export async function GET() {
  const allVideos = [...userUploadedVideos, ...recommendedVideos];

  return NextResponse.json({ data: { Get: { Video: allVideos } } });
}
