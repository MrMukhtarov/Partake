import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

const SnackPackContexts = createContext();

export const SnackPacksContext = ({ children }) => {
  const [snackPacks, setSnackPacks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) =>
        setSnackPacks(
          res.data.products.filter(
            (a) => a.category[0] === "6409b0366fa11033b6f198be"
          )
        )
      )
      .catch((err) => console.log(err));
  }, []);

  const values = {
    snackPacks,
    setSnackPacks,
  };

  return (
    <SnackPackContexts.Provider value={values}>
      {children}
    </SnackPackContexts.Provider>
  );
};

export const useSnackPacks = () => {
  const context = useContext(SnackPackContexts);

  if (context === undefined) {
    throw new Error("useSnackPacks must be used within a SnackPacksProvider");
  }

  return context;
};
