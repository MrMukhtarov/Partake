import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

const VarietyContexts = createContext();

export const VarietyContext = ({ children }) => {
  const [variety, setVariety] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) => {
        setVariety(
          res.data.products.filter(
            (a) =>
              a.category[0] === "640601c2dfe74d519c496be6" ||
              a.category[1] === "640601c2dfe74d519c496be6"
          )
        );
      })
      .catch((err) => console.log(err));
  }, []);

  const values = {
    variety,
    setVariety,
  };

  return (
    <VarietyContexts.Provider value={values}>
      {children}
    </VarietyContexts.Provider>
  );
};

export const useVariety = () => {
  const context = useContext(VarietyContexts);

  if (context === undefined) {
    throw new Error("useVariety must be used within a VarietyProvider");
  }

  return context;
};
