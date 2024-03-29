import Head from "next/head";
import dbConnect from "../lib/dbConnect";
import Movie from "../models/Movie";
import Link from "next/link";


export default function Home({ movies }) {
  console.log("movies:", movies);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <h1>Movies Lista General</h1>
        <Link href="/new" className="btn btn-primary w-100 my-2">
          Agregar
        </Link>
        {movies.map(({ _id, title, plot }) => (
          <div className="card mb-2" key={_id}>
            <div className="card body">
              <div className="h5 text-uppercase">{title}</div>
              <p className="fw light">{plot}</p>
            </div>
            <Link href={`/${_id}`} className="btn btn-info w-100 my-2">
              Más Info
            </Link>
          </div>
        ))}
      </main>
    </>
  );
}

//SSR
export async function getServerSideProps() {
  try {
    await dbConnect();
    
    const result = await Movie.find({});
    //console.log("Data", result)

    const movies = result.map((doc) => {
      const movie = doc.toObject();
      movie._id = movie._id.toString();
      return movie;
    });

    return { props: { movies } };
  } catch (error) {
    console.log(error);
  }
}

