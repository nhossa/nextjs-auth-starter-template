import weaviate from "weaviate-ts-client";

const client = weaviate.client({
  scheme: "https",
  host: "https://hd8utzwjtx6rmzyba4pfcg.c0.us-east1.gcp.weaviate.cloud",
  apiKey: "t5H6Xd8xn8aszPvXX7vYMsYYYtkbI33684VQ",
});

export default async function handler(req, res) {
  const recommendedVideos = await client.graphql
    .get()
    .withClassName("Video")
    .withFields(["title", "url", "description"])
    .do();

  res.status(200).json(recommendedVideos);
}
