import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext({
  cart: [],
  setCart: () => {},
  findAddedToCart: () => {},
  handleQuantity: () => {},
  handleRemove: () => {}
});

export const useCart = () => useContext(CartContext);

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {}, []);

  function findAddedToCart(id = '') {
    const matchedItem = cart.find((d) => d.id === id);
    return matchedItem;
  }

  function handleQuantity(id = 0, type = 'increment') {
    const cartCopy = [...cart];
    const matchedItem = cartCopy.find((d) => d.id === id);

    if (type === 'increment') {
      matchedItem.quantity += 1;
    } else if (type === 'decrement' && matchedItem.quantity > 0) {
      matchedItem.quantity -= 1;
    }

    setCart(cartCopy);
  }

  function handleRemove(id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  const value = {
    cart,
    setCart,
    findAddedToCart,
    handleQuantity,
    handleRemove 
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
