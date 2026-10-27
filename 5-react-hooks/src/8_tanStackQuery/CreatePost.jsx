import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "../6_customHook/useForm";
import axios from "axios";
import WrapperReactQuery from "./WrapperReactQuery";

const CreatePostWithRQ = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, data, isPending, error } = useMutation({
    mutationFn: sendPostToBackend,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });

  async function sendPostToBackend(data) {
    const response = await axios.post("https://dummyjson.com/posts/add", {
      ...data,
      userId: 5,
      id: 524234524,
    });
    return response.data;
  }

  const { register, handleFormSubmit } = useForm({
    initialValues: {
      title: "",
      body: "",
    },
    onSubmit,
  });

  function onSubmit(formData) {
    console.log("helloworld");
    console.log(formData);
    mutateAsync(formData);
  }

  console.log(data);

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
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

      <WrapperReactQuery />
    </div>
  );
};

export default CreatePostWithRQ;
