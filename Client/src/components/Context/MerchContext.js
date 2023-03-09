import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

const MerchContexts = createContext();

export const MerchContext = ({ children }) => {
  const [merch, setMerch] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) =>
        setMerch(
          res.data.products.filter(
            (a) =>
              a.category[0] === "6409c6b26fa11033b6f198c0" ||
              a.category[1] === "6409c6b26fa11033b6f198c0"
          )
        )
      )
      .catch((err) => console.log(err));
  }, []);

  const values = {
    merch,
    setMerch,
  };

  return (
    <MerchContexts.Provider value={values}>{children}</MerchContexts.Provider>
  );
};

export const useMerch = () => {
  const context = useContext(MerchContexts);

  if (context === undefined) {
    throw new Error("useMerch must be used within a MerchProvider");
  }

  return context;
};
