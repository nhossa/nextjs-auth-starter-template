import { NextResponse } from "next/server";

let videos = [
  {
    title: "Sunset Timelapse",
    url: "https://www.videvo.net/videvo_files/converted/2014_07/preview/Sunrise_Timelapse_20_Videvo.mov79545.webm",
    description: "A beautiful sunset timelapse.",
  },
  {
    title: "City Traffic",
    url: "https://www.videvo.net/videvo_files/converted/2015_08/preview/City_Cars_Timelapse.mp494793.webm",
    description: "City traffic during rush hour.",
  },
];

export async function POST(req) {
  const { title, url, description } = await req.json();

  const newVideo = { title, url, description };
  videos.push(newVideo);

  return NextResponse.json({ message: "Video added!", videos });
}

export async function GET() {
  return NextResponse.json(videos);
}
