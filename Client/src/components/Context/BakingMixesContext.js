import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

const BakingMixesContexts = createContext();

export const BakingMixesContext = ({ children }) => {
  const [bakingMixes, setBakingMixes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) =>
        setBakingMixes(
          res.data.products.filter(
            (a) => a.category[0] === "6405cc6bdfe74d519c496be4"
          )
        )
      )
      .catch((err) => console.log(err));
  }, []);

  const values = {
    bakingMixes,
    setBakingMixes,
  };

  return (
    <BakingMixesContexts.Provider value={values}>
      {children}
    </BakingMixesContexts.Provider>
  );
};

export const useBakingMixes = () => {
  const context = useContext(BakingMixesContexts);

  if (context === undefined) {
    throw new Error("useBakingMixes must be used within a BakingMixesProvider");
  }

  return context;
};
