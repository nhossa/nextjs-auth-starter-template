import weaviate from "weaviate-ts-client";

const client = weaviate.client({
  scheme: "https",
  host: "https://hd8utzwjtx6rmzyba4pfcg.c0.us-east1.gcp.weaviate.cloud",
  apiKey: "t5H6Xd8xn8aszPvXX7vYMsYYYtkbI33684VQ",
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, url, description } = req.body;

    // Store video metadata in Weaviate
    await client.data
      .creator()
      .withClassName("Video")
      .withProperties({ title, url, description })
      .do();

    res.status(200).json({ message: "Video stored successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
