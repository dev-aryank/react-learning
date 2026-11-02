import { useState } from "react";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import products from "./data/products.js";

const ShoppingPage = () => {
  const [cart, setCart] = useState([]);

  function handleAddToCart(productId) {
    handleUpdateQuantity(productId, 1);
  }

  function handleUpdateQuantity(productId, quantity) {
    setCart((prevCart) => {
      const prevItem = prevCart.find((item) => item.id === productId);

      if (prevItem) {
        return prevCart
          .map((item) => {
            if (item.id === productId) {
              const newQuantity = item.quantity + quantity;

              if (newQuantity == 0) return null;

              return {
                ...item,
                quantity: item.quantity + quantity,
              };
            }

            return item;
          })
          .filter((item) => item != null);
      }

      const product = products.find((item) => item.id === productId);

      return [...prevCart, { ...product, quantity: 1 }];
    });
  }

  function handleAddOneItem(productId) {
    handleUpdateQuantity(productId, 1);
  }

  function handleMinusOneItem(productId) {
    handleUpdateQuantity(productId, -1);
  }

  return (
    <div className="h-screen flex">
      <div id="products" className="flex-2 overflow-y-auto p-12 space-y-12">
        <h2 className="text-4xl font-light">Products</h2>

        <ProductList products={products} />
      </div>

      <div id="cart" className="flex-1 overflow-y-auto space-y-12">
        <h2 className="text-4xl font-light px-6 pt-12">Your Cart</h2>

        <Cart
          cart={cart}
          handleAddOneItem={handleAddOneItem}
          handleMinusOneItem={handleMinusOneItem}
        />
      </div>
    </div>
  );
};

export default ShoppingPage;
