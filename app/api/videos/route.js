import { NextResponse } from "next/server";

let videos = [
  {
    title: "Big Buck Bunny",
    url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4",
    description: "A short animated video."
  },
  {
    title: "Sintel Trailer",
    url: "https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_1MB.mp4",
    description: "A trailer for the short film Sintel."
  }
];

export async function GET() {
  return NextResponse.json({ data: { Get: { Video: videos } } });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, url, description } = body;

    if (!title || !url || !description) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const newVideo = { title, url, description };
    videos.push(newVideo);

    return NextResponse.json({ message: "Video uploaded successfully!", video: newVideo });
  } catch (error) {
    return NextResponse.json({ error: "Failed to upload video." }, { status: 500 });
  }
}
