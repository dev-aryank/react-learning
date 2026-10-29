import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigation, useParams } from "react-router";
import Loader from "../../component/Loader";

export async function loadProductById({ params }) {
  const id = params.id;
  const response = await axios("https://dummyjson.com/products/" + id);
  return response.data;
}

const ProductDetails = () => {
  // const params = useParams();
  // const [product, setProduct] = useState(null);
  // console.log(params);

  // const id = params.id;
  // if (!id) return <p>Id not found!</p>;

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios("https://dummyjson.com/products/" + id);
  //     const data = response.data;
  //     setProduct(data);
  //   }
  //   // fetchData();
  // }, [id]);

  // if (!product) return <p>Loading...</p>;



  const product = useLoaderData();

  return (
    <div className="space-y-2">
      <div>
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <p className="text-sm">ID: {product.id}</p>
      <h1 className="text-2xl font-semibold">{product.title}</h1>
      <p>{product.description}</p>
      <p>$ {product.price}</p>
    </div>
  );
};

export default ProductDetails;
