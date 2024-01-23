import { useRouter } from "next/router";
import dbConnect from "../../lib/dbConnect";
import Movie from "../../models/Movie";
import Link from "next/link";
import React from "react";

export default function MoviePage({ success, error, movie }) {
  const router = useRouter();

  // const { id } = router.query;
  // console.log("id enviado", id);

  if (!success) {
    return (
      <div>
        <div className="container text-center my-5">
          <h1>{error} 🙈</h1>
        </div>
        <Link href="/" className="btn btn-warning w-100 my-2">
          Volver
        </Link>
      </div>
    );
  }

  const deleteData = async (id) => {
    try {
      await fetch(`/api/movie/${id}`, {
        method: "DELETE",
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Detalle de la Pelicula 🚕 🐒</h1>
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <h5 className="text-uppercase">{movie.title}</h5>
          </div>
          <div className="f-light">{movie.plot}</div>
        </div>
      </div>
      <Link href="/" className="btn btn-success w-100 my-2">
        Volver
      </Link>
      <Link href={`${movie._id}/edit`} className="btn btn-warning w-100 my-2">
        Editar
      </Link>
      <button
        className="btn btn-danger w-100 my-2"
        onClick={() => deleteData(movie._id)}
      >
        Eliminar
      </button>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  try {
    await dbConnect();
    const movie = await Movie.findById(params.id).lean();

    //console.log(movie);
    if (!movie) {
      return { props: { success: false, error: "Pelicula no encontrada" } };
    }
    movie._id = `${movie._id}`;

    return { props: { success: true, movie} };
  } catch (error) {
    console.log(error);
    return { props: { success: false, error: "id no valido" } };
  }
}
