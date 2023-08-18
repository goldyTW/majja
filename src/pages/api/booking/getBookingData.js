import excuteQuery from "../../../../lib/db";
import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  // Enable CORS for the endpoint
  await NextCors(req, res, {
    methods: ["GET"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  if (req.method === "GET") {
    try {
      const bookinganData = await excuteQuery({
        query: "SELECT * FROM bookinganData", // Ganti dengan query yang sesuai untuk mengambil data dari bookinganData
      });

      res.status(200).json(bookinganData);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
