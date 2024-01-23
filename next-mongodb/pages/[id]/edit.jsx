import React from "react";
import useSWR from "swr"; //Navegador
import Form from "../../components/Form";
import { useRouter } from "next/router";

// https://swr.vercel.app/docs/error-handling#status-code-and-error-object
const fetcher2 = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  const { data } = await res.json();
  return data;
};

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function EditMovie() {
  const router = useRouter();
  const { id } = router.query;
  
  // console.log("id enviado", id);

  //console.log("id", id ? `/api/movie/${id}` : null);
  const { data, error } = useSWR(
    id ? `/api/movie/${id}` : null,
    fetcher
  );
  //console.log("movie 🎥", data);

  if (!data) {
    return (
      <div>
        <h1 className="container">Loading... </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1 className="container">Error... </h1>
      </div>
    );
  }

  const formData = {
    title: data.movie.title,
    plot: data.movie.plot,
  };

  return (
    <div>
      <h1 className="container">Editar Movie</h1>
      <Form formData={formData} forNewMovie={false} />
    </div>
  );
}
