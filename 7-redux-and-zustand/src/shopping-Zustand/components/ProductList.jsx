import useGlobalStore from "../../store-Zustand/store";
import ProductCard from "./ProductCard";

const ProductList = () => {

    const products = useGlobalStore(state => state.products)

    return (
        <div className="flex flex-wrap gap-8 justify-around">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
};

export default ProductList;
