import { useRouter } from "next/router";
import React, { useState } from "react";
import Link from "next/link";

export default function Form({ formData, forNewMovie = true }) {
  const router = useRouter();

  const [form, setForm] = useState({
    title: formData.title,
    plot: formData.plot,
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const [message, setMessage] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (forNewMovie) {
      postData(form);
    } else {
      putData(form);
    }
  };

  const putData = async (form) => {
    const { id } = router.query;
    // console.log("form", form);
    // console.log("json form", JSON.stringify(form));

    try {
      //console.log(form);

      const res = await fetch(`/api/movie/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      //console.log("data Response:", data);

      if (!data.success) {
        for (const key in data.error.errors) {
          let error = data.error.errors[key];
          setMessage((oldMessage) => [
            ...oldMessage,
            { message: error.message },
          ]);
          //console.log(error.message)
        }
      } else {
        setMessage([])
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const postData = async (form) => {
    try {
      //console.log(form);
      const res = await fetch("/api/movie", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      //console.log("data:", data);

      if (!data.success) {
        for (const key in data.error.errors) {
          let error = data.error.errors[key];
          setMessage((oldMessage) => [
            ...oldMessage,
            { message: error.message },
          ]);
          //console.log(error.message)
        }
      } else {
        setMessage([])
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        className="form-control my 2"
        placeholder="title"
        value={form.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="plot"
        className="form-control my 2"
        placeholder="plot"
        value={form.plot}
        onChange={handleChange}
      />
      <button className="btn btn-primary w-100 my-2">
        {forNewMovie ? "Agregar" : "Editar"}
      </button>
      <Link href="/" className="btn btn-warning w-100 my-2">
        Volver
      </Link>
      {message.map(({ message }) => (
        <p key={message}>{message}</p>
      ))}
    </form>
  );
}
