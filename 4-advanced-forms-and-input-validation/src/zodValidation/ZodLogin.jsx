import { useState } from "react";
import { z, ZodError } from "zod";
// import "./LearnZod.js";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ZodLogin = () => {
  "use no memo";

  // const [data, setData] = useState({
  //   email: "",
  //   password: ""
  // });

  // const [errors, setErrors] = useState({});

  const zodSchema = z.object({
    email: z.email("Enter a valid Email.").trim(),
    password: z
      .string()
      .min(8, "Password should be min 8 chars long")
      .max(32, "Max length for a password is 32 chars"),
    age: z.number().min(18).optional(),
  });

  // function handleInputUpdate(e){
  //   const {name, value} = e.target;
  //   setData({...data, [name]:value});
  // }

  // function handleFormSubmit(e){
  //   e.preventDefault();
  //   try {
  //     const result = zodSchema.parse(data);
  //     // const result = zodSchema.safeParse(data);
  //     console.log(result)
  //     setErrors({});

  //   } catch (error) {
  //     if(error instanceof ZodError){
  //       const newErrors = error.issues.reduce((acc, field) => {
  //         acc[field.path[0]] = field.message;
  //         return acc;
  //       }, {});
  //       setErrors(newErrors);
  //       console.log(newErrors);
  //     }
  //   }
  // }

  async function sendToBackend(data) {
    console.log("Sending to backend");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("Sent", data);
  }

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isDirty, errors, isSubmitting, isValid },
  } = useForm({
    defaultValues: {
      email: "panchasara.aryan18@gmail.com",
      password: "password12345",
    },
    resolver: zodResolver(zodSchema),
    shouldUnregister: true,
    // mode: "onChange"
  });

  console.log(errors);

  const [emailWatch, isAdultWatch] = watch(["email", "isAdult"]);
  console.log(emailWatch);

  return (
    <div>
      <h1>Zod Login</h1>
      <form onSubmit={handleSubmit(sendToBackend)} noValidate>
        <label>
          Email
          <input
            type="email"
            // {...register("email", {
            //   required: "Email is required",
            //   pattern: {
            //     value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            //     message: "Not a valid email bro!!",
            //   },
            // })}
            {...register("email")}
          />
        </label>
        {errors.email && <p>{errors.email.message}</p>}
        <br />
        <label>
          Password
          <input
            type="password"
            // {...register("password", {
            //   required: "Password is required",
            //   minLength: {
            //     value: 8,
            //     message: "Password needs to be of atleast length 8",
            //   },
            //   maxLength: {
            //     value: 32,
            //     message: "Max length of password allowed is 32",
            //   },
            // })}
            {...register("password")}
          />
        </label>
        {errors.password && <p>{errors.password.message}</p>}

        <br />
        <label>
          Are you above 18?
          <input type="checkbox" {...register("isAdult")} />
        </label>

        {isAdultWatch && (
          <>
            <br />
            <label>
              Age
              <input
                type="number"
                {...register("age", { valueAsNumber: true })}
              />
            </label>
          </>
        )}

        <br />
        {/* <button disabled={!isDirty || isSubmitting}>Submit</button> */}
        <button disabled={isSubmitting || !isValid}>Submit</button>
        <button
          type="button"
          onClick={() =>
            reset({
              email: "aryan@gmail.com",
              password: "",
            })
          }
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default ZodLogin;
