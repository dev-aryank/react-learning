import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../component/ProductCard";
import { useLoaderData, useLocation, useSearchParams } from "react-router";

export async function loadProductsData({ params, request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") || "";
  const response = await axios(
    "https://dummyjson.com/products/search?q=" + query,
  );
  return response.data?.products;
}

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const [params, setParams] = useSearchParams();
  const query = params.get("query") || "";
  const location = useLocation();

//   console.log("location", location);

//   console.log("params", params);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios(
          "https://dummyjson.com/products/search?q=" + query,
        );
        const data = response.data;
        setProducts(data.products);
      } catch (e) {
        // alert("error occurred", e.message)
        console.log("error occurred", e);
        setError(e);
      }
    }

    // fetchData();
  }, [query]);

  const loaderProducts = useLoaderData();

  if (error) {
    throw new Error(e);
  }

  function onQuerySubmit(formData) {
    const data = Object.fromEntries(formData);
    setParams({
      ...params,
      q: data.query,
    });
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg my-4">All Products: {query}</h2>
      <form action={onQuerySubmit}>
        <input
          type="text"
          defaultValue={query}
          placeholder="e.g. Polish"
          name="query"
          className="border px-4 py-2 w-full"
        />
      </form>
      <div className="flex flex-wrap gap-2">
        {loaderProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
