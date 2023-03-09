import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

const GiftContexts = createContext();

export const GiftContext = ({ children }) => {
  const [gift, setGift] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) =>
        setGift(
          res.data.products.filter(
            (a) => a.category[0] === "6409bb906fa11033b6f198bf"
          )
        )
      )
      .catch((err) => console.log(err));
  }, []);

  const values = {
    gift,
    setGift,
  };

  return (
    <GiftContexts.Provider value={values}>{children}</GiftContexts.Provider>
  );
};

export const useGifts = () => {
  const context = useContext(GiftContexts);

  if (context === undefined) {
    throw new Error("useGift must be used within a GiftsProvider");
  }

  return context;
};
