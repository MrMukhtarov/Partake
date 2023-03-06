import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

const CrunchyContexts = createContext();

export const CrunchyContext = ({ children }) => {
  const [crunchy, setCrunchy] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) =>
        setCrunchy(
          res.data.products.filter(a => a.category[0] === "6403108d1d00e7ed7ad01b7d")
        )
      )
      .catch((err) => console.log(err));
  }, []);

  const values = {
    crunchy,
    setCrunchy,
  };

  return (
    <CrunchyContexts.Provider value={values}>
      {children}
    </CrunchyContexts.Provider>
  );
};

export const useCrunchy = () => {
  const context = useContext(CrunchyContexts);

  if (context === undefined) {
    throw new Error("useCrunchy must be used within a CrunchyProvider");
  }

  return context;
};
