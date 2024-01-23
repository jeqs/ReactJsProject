import dbConnect from "../../../lib/dbConnect";
import Movie from "../../../models/Movie";

export default async function handler(req, res) {
  // PUT api/movie/:id
  // DELETE api/movie/:id
  // GET api/movie/:id

  const {
    method,
    query: { id },
  } = req;

  //console.log(form);
  //console.log(id, req.body)

  await dbConnect();

  switch (method) {
    
    case "PUT":
      try {
        const movie = await Movie.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        }).lean();
        if (!movie) {
          return res
            .status(404)
            .json({ success: false, error: "Pelicula no encontrada" });
        } else {
          return res.json({ success: true, movie });
        }
      } catch (error) {
        return res.status(400).json({ success: false, error });
      }

    case "DELETE":
      try {
        const movie = await Movie.findByIdAndDelete(id).lean();
        if (!movie) {
          return res
            .status(404)
            .json({ success: false, error: "Pelicula no encontrada" });
        } else {
          return res.json({ success: true, movie });
        }
      } catch (error) {
        return res.status(400).json({ success: false, error });
      }

    case "GET":
      try {
        const movie = await Movie.findById(id).lean();
        if (!movie) {
          return res
            .status(404)
            .json({ success: false, error: "Pelicula no encontrada " });
        } else {
          return res.json({ success: true, movie });
        }
      } catch (error) {
        return res.status(400).json({ success: false, error });
      }
    default:
      return res
        .status(500)
        .json({ success: false, error: "falla de servidor" });
  }
}
