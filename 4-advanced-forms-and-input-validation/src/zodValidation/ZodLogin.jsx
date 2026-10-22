import { useState } from 'react'
import {z, ZodError} from "zod";
import './LearnZod.js';

const ZodLogin = () => {

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const zodSchema = z.object({
    email: z.email("Enter a valid Email.").trim(),
    password: z.string().min(8, "Password should be min 8 chars long").max(32, "Max length for a password is 32 chars")
  });

  function handleInputUpdate(e){
    const {name, value} = e.target;
    setData({...data, [name]:value});
  }

  function handleFormSubmit(e){
    e.preventDefault();
    try {
      const result = zodSchema.parse(data);
      // const result = zodSchema.safeParse(data);
      console.log(result)
      setErrors({});


    } catch (error) {
      if(error instanceof ZodError){
        const newErrors = error.issues.reduce((acc, field) => {
          acc[field.path[0]] = field.message;
          return acc;
        }, {});
        setErrors(newErrors);
        console.log(newErrors);
      }
    }
  }

  return (
    <div>
      <h1>Zod Login</h1>
      <form onSubmit={handleFormSubmit} noValidate>
        <label>
            Email
            <input type="email" name="email" value={data.email} onChange={handleInputUpdate}/>
        </label>
        {errors.email && <p>{errors.email}</p>}
        <br />
        <label>
            Password
            <input type="password" name="password" value={data.password} onChange={handleInputUpdate}/>
        </label>
        {errors.password && <p>{errors.password}</p>}
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ZodLogin
