import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  console.log(params);

  const id = params.id;
  if (!id) return <p>Id not found!</p>;

  useEffect(() => {
    async function fetchData() {
      const response = await axios(`https://dummyjson.com/products/${id}`);
      const data = response.data;
      setProduct(data);
    }
    fetchData();
  }, [id]);

  if(!product) return <p>Loading...</p>

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
