import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

const FormHook = () => {
  const { register, setError, formState: { errors } } = useForm();

  const enviarDatos = (data) => {
    console.log(data);
  };

  return (
    <Fragment>
      <h2>Hooks Forms</h2>
      <form>
        <input {...register("test")} />
        {errors.test && <p>{errors.test.message}</p>}

        <button
          type="button"
          onClick={() => {
            setError("test", { type: "focus" }, { shouldFocus: true });
          }}
        >
          Set Error Focus
        </button>
        <input type="submit" />
      </form>
    </Fragment>
  );
};

export default FormHook;
