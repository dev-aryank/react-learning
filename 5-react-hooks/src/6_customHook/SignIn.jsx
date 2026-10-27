import { useState } from "react";
import { useForm } from "./useForm";

const SignIn = () => {
  function onSubmit(formData) {
    console.log("Submitting...");
    console.log(formData);
  }

  const { handleFormsubmit, register } = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
  });

  return (
    <div>
      <form onSubmit={handleFormsubmit}>
        <label>
          Email
          <input type="email" {...register("email")} />
        </label>

        <label>
          Password
          <input
            type="password"
            // name="password"
            // onChange={handleChange}
            // value={formData.password}
            {...register("password")}
          />
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignIn;
