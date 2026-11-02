import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";

const ProductList = () => {

    return (
        <div className="flex flex-wrap gap-8 justify-around">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
};

export default ProductList;
