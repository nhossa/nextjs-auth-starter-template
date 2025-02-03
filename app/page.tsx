import VideoFeed from "./components/VideoFeed";
import LikeComment from "./components/LikeComment";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-6">PopReel - Short Video Platform</h1>
      <VideoFeed />
      <LikeComment title="Sample Video" url="https://example.com/video.mp4" description="Example video content." />
    </div>
  );
}
