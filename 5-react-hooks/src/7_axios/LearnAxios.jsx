import { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";
import api from "./Api";
import { useQuery } from "./useQuery";

const LearnAxios = () => {
  // const [posts, setPosts] = useState([]);

  const { data, isPending, error } = useQuery("https://dummyjson.com/posts");

  if(error){
    return <p>Error: {error}</p>
  }
  if(isPending){
    return <p>Loading...</p>
  }

  return (
    <div>
      {data?.posts?.map((item) => (
        <Post key={item.id} item={item} />
      ))}
    </div>
  );
};

// async function fetchData() {
// const response = await axios.get("https://dummyjson.com/posts");
// const response = await api.get("/products");
// const response = setPosts(response.data.products);

// fetch("https://dummyjson.com/posts")
//     .then(res => res.json())
//     .then(data => setPosts(data.posts));
// }

// useEffect(() => {
//   fetchData();
// }, []);

export default LearnAxios;
