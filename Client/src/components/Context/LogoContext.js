import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

const LogoContexts = createContext();

export const LogoContext = ({ children }) => {
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/logo")
      .then((res) => setLogo(res.data.logo))
      .catch((err) => console.log(err));
  }, []);

  const values = {
    logo,
    setLogo,
  };

  return (
    <LogoContexts.Provider value={values}>{children}</LogoContexts.Provider>
  );
};

export const useLogo = () => {
  const context = useContext(LogoContexts);

  if (context === undefined) {
    throw new Error("useLogo must be used within a LogoProvider");
  }

  return context;
};
