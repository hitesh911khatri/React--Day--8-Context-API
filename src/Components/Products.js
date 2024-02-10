import React from "react";
import ProductCard from "../Components/ProductCard";
import Cart from "../Components/Cart"; 
import { useProduct } from "../Context/ProductContext";
import { useCart } from "../Context/CartContext";

function Products() {
  const { products } = useProduct();
  const { cart, setCart, findAddedToCart, handleQuantity, handleRemove } = useCart();

  function handleAddToCart(product) {
    if (product.id) {
      const isAlreadyInCart = cart.find((item) => item.id === product.id);
      if (isAlreadyInCart) {
        setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
      } else {
        setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
      }
    }
  }

  return (
    <div>
      <Cart cartCount={cart.length} /> 
      {products?.map((d, i) => (
        <ProductCard
          data={d}
          key={`products-${i}-${d.id}`}
          handleAddToCart={handleAddToCart}
          isAddedToCart={findAddedToCart(d?.id)}
          handleQuantity={handleQuantity}
          handleRemove={handleRemove} 
        />
      ))}
    </div>
  );
}

export default Products;
