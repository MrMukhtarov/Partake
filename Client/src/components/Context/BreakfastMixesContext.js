import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

const BreakfastMixesContexts = createContext();

export const BreakFastMixesContext = ({ children }) => {
  const [breakfastMixes, setBreakfastMixes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) =>
        setBreakfastMixes(
          res.data.products.filter(
            (a) => a.category[0] === "6405f728dfe74d519c496be5"
          )
        )
      )
      .catch((err) => console.log(err));
  }, []);

  const values = {
    breakfastMixes,
    setBreakfastMixes,
  };

  return (
    <BreakfastMixesContexts.Provider value={values}>
      {children}
    </BreakfastMixesContexts.Provider>
  );
};

export const useBreakFastMixes = () => {
  const context = useContext(BreakfastMixesContexts);

  if (context === undefined) {
    throw new Error(
      "useBreakFastMixes must be used within a BreakFastMixesProvider"
    );
  }

  return context;
};
