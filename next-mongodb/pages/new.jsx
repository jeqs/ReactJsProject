import Form from "@/components/Form";
import React from "react";

export default function New() {
  const formData = {
    title: "",
    plot: "",
  };

  return (
    <div>
      <h1 className="container">Agregar Movie</h1>
      <Form formData={formData} />
    </div>
  );
}
