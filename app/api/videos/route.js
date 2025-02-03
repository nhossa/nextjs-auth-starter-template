import { NextResponse } from "next/server";

let videos = []; // Temporary storage (use a database in production)

export async function POST(req) {
  try {
    const { title, url, description } = await req.json();
    if (!title || !url || !description) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const newVideo = { title, url, description, likes: 0, comments: [] };
    videos.push(newVideo);

    return NextResponse.json({ message: "Video uploaded successfully!", video: newVideo });
  } catch (error) {
    return NextResponse.json({ error: "Failed to upload video" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json(videos);
}
