import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

const ProductsContexts = createContext();

export const ProductsContext = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  const values = {
    products,
    setProducts,
  };

  return (
    <ProductsContexts.Provider value={values}>
      {children}
    </ProductsContexts.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContexts);

  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }

  return context;
};
