import { NextResponse } from "next/server";

// User-uploaded videos
const userUploadedVideos = [
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

// Recommended videos
const recommendedVideos = [
  {
    title: "Nature Walk",
    url: "https://www.videvo.net/videvo_files/converted/2017_11/preview/170810_Forest_Path.mp479985.webm",
    description: "A peaceful walk through the forest.",
  },
  {
    title: "Ocean Waves",
    url: "https://www.videvo.net/videvo_files/converted/2016_02/preview/Ocean_Waves_5_Videvo.mov90514.webm",
    description: "Relaxing ocean waves crashing on the shore.",
  },
];

// Combine user-uploaded and recommended videos
export async function GET() {
  const allVideos = [...userUploadedVideos, ...recommendedVideos];

  return NextResponse.json({ data: { Get: { Video: allVideos } } });
}
