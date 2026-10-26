import { useEffect, useState } from "react";

const LearnUseEffect = () => {
  const [data, setData] = useState({});
  const [id, setId] = useState(1);
  const [loading, setLoading] = useState(false);

  async function fetchData(abortController) {
    const url = "https://dummyjson.com/products/" + id;

    try {
      setLoading(true);
      const response = await fetch(url, {
        //   Connect this fetch request to the AbortController
        signal: abortController.signal,
      });
      const jsonData = await response.json();
      setData(jsonData);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  useEffect(() => {
    // New controller is created for every execution of this effect
    const abortController = new AbortController();

    fetchData(abortController);

    // NEVER update `id` here because `id` is a dependency.
    // It would cause the effect to run again and create a loop.
    // setId((prevId) => prevId + 1);

    return () => {
      // Cleanup runs:
      // 1. Before effect runs again when `id` changes
      // 2. When component unmounts
      console.log("Cleaning up...");

      // Cancel the previous request because we no longer need it
      abortController.abort();
    };
  }, [id]);

  return (
    <>
      {loading && <p>Loading...</p>}
      <p>
        {id} {data.title}
      </p>

      <button onClick={() => setId((prevId) => prevId + 1)}>Next</button>
    </>
  );
};

export default LearnUseEffect;
