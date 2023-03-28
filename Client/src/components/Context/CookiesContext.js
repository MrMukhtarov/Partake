import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

const CookiesContexts = createContext();

export const CookiesContext = ({ children }) => {
  const [cookies, setCookies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) =>
        setCookies(
          res.data.products.filter(
            (a) =>
              a.category[0] === "6422f5a89a86689b900c26af" ||
              a.category[1] === "6422f5a89a86689b900c26af" ||
              a.category[2] === "6422f5a89a86689b900c26af"
          )
        )
      )
      .catch((err) => console.log(err));
  }, []);

  const values = {
    cookies,
    setCookies,
  };

  return (
    <CookiesContexts.Provider value={values}>
      {children}
    </CookiesContexts.Provider>
  );
};

export const useCookies = () => {
  const context = useContext(CookiesContexts);

  if (context === undefined) {
    throw new Error("useCookies must be used within a CookiesProvider");
  }

  return context;
};
