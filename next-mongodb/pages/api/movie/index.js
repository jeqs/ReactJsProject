import dbConnect from "../../../lib/dbConnect";
import Movie from "../../../models/Movie";

export default async function handler(req, res) {
  
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const movie = new Movie(req.body);
        await movie.save();
        return res.json({ success: true, movie });
        
      } catch (error) {
        return res.status(400).json({ success: false, error });
      }
    default:
      return res
        .status(500)
        .json({ success: false, error: "falla de servidor" });
  }
}
