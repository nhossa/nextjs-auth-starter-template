import { NextResponse } from "next/server";

const videos = [
  {
    title: "Big Buck Bunny",
    url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4",
    description: "A short animated video."
  },
  {
    title: "Sintel Trailer",
    url: "https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_1MB.mp4",
    description: "A trailer for the short film Sintel."
  },
  {
    title: "Sample MP4 Video",
    url: "https://file-examples.com/storage/fe48a7d6eb12dc539f4e9d7/2017/04/file_example_MP4_640_3MG.mp4",
    description: "A general test video in MP4 format."
  },
  {
    title: "Ocean Waves",
    url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    description: "Relaxing ocean waves."
  }
];

export async function GET() {
  return NextResponse.json({ data: { Get: { Video: videos } } });
}
