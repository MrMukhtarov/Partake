import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

const BestSellersContexts = createContext();

export const BestSellerContext = ({ children }) => {
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) =>
        setBestSeller(
          res.data.products.filter(
            (a) => a.status === "6403326e7694afa7307efdd8"
          )
        )
      )
      .catch((err) => console.log(err));
  }, []);

  const values = {
    bestSeller,
    setBestSeller,
  };

  return (
    <BestSellersContexts.Provider value={values}>
      {children}
    </BestSellersContexts.Provider>
  );
};

export const useBestSeller = () => {
  const context = useContext(BestSellersContexts);

  if (context === undefined) {
    throw new Error("useBestSeller must be used within a BestSellerProvider");
  }

  return context;
};
