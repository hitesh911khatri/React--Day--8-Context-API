import React, { createContext, useContext, useEffect, useState } from "react";

export const ProductContext = createContext({
  products: [],
  setProducts: () => {},
  syncProductData: () => {}
});

export const useProduct = () => useContext(ProductContext);
export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);

  function syncProductData() {
    fetch("./mocks/products.json")
      .then((response) => response.json())
      .then((result) => {
        setProducts(result.data);
      })
      .catch((error) => {
        console.log("Error fetching product data:", error);
      });
  }

  useEffect(() => {
    syncProductData();
  }, []);

  const value = {
    products,
    setProducts,
    syncProductData
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
