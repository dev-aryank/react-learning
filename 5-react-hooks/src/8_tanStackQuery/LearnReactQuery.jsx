import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Post from "../7_axios/Post";
import { useState } from "react";

const LearnReactQuery = () => {
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 5;

  async function fetchPosts() {
    const response = await axios.get(
      `https://dummyjson.com/posts?limit=${PAGE_SIZE}&skip=${PAGE_SIZE * (page - 1)}`,
    );
    return response.data.posts;
  }

  const {
    data: posts,
    isPending,
    error,
  } = useQuery({
    queryKey: ["posts", page],
    queryFn: fetchPosts,
    staleTime: 10000,
    gcTime: 20000, //garbage collector time
    refetchOnWindowFocus: true,
  });

  return (
    <div>
      <button onClick={() => setPage((prev) => prev - 1)}>Prev</button>
      <span>Page: {page}</span>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      {posts?.map((item) => (
        <Post item={item} key={item.id} />
      ))}
    </div>
  );
};

export default LearnReactQuery;
