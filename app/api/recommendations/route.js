import { NextResponse } from "next/server";

export async function GET() {
  // Sample static recommendations (replace with AI/ML logic in the future)
  const recommendedVideos = [
    { title: "Muay Thai Training", url: "https://example.com/video1.mp4", description: "Improve your kicks!" },
    { title: "Kickboxing Basics", url: "https://example.com/video2.mp4", description: "Learn footwork techniques." },
  ];

  return NextResponse.json({ data: { Get: { Video: recommendedVideos } } });
}
