import React from "react";
import { useForm } from "../6_customHook/useForm";
import { useMutation } from "./useMutation";

const CreatePost = () => {

    const {mutate, data, isPending, error} = useMutation("https://dummyjson.com/post/add", "POST")

  const { register, handleFormsubmit } = useForm({
    initialValues: {
      title: "",
      body: "",
    },
    onSubmit,
  });

  function onSubmit(formData) {
    console.log(formData);

    mutate({
        ...formData,
        userId: 5,
        id: crypto.randomUUID()
    })
  }

  console.log(data)

  return (
    <div>
      <form onSubmit={handleFormsubmit}>
        <label>
          Title
          <input type="text" {...register("title")} />
        </label>

        <label>
          Body
          <input type="text" {...register("body")} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
