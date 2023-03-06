import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

const SoftBakedContexts = createContext();

export const SoftBakedContext = ({ children }) => {
  const [softBaked, setSoftBaked] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) =>
        setSoftBaked(
          res.data.products.filter(
            (a) => a.category[0] === "6405b20c953586b3106f4738"
          )
        )
      )
      .catch((err) => console.log(err));
  }, []);

  const values = {
    softBaked,
    setSoftBaked,
  };

  return (
    <SoftBakedContexts.Provider value={values}>
      {children}
    </SoftBakedContexts.Provider>
  );
};

export const useSoftBaked = () => {
  const context = useContext(SoftBakedContexts);

  if (context === undefined) {
    throw new Error("useSoftBaked must be used within a SoftBakedProvider");
  }

  return context;
};
