import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

const SubCategoryContexts = createContext();

export const SubCategoryContext = ({ children }) => {
  const [subCategory, setSubCategory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/subcategory")
      .then((res) => setSubCategory(res.data.subCategory))
      .catch((err) => console.log(err));
  }, []);

  const values = {
    subCategory,
    setSubCategory,
  };

  return (
    <SubCategoryContexts.Provider value={values}>
      {children}
    </SubCategoryContexts.Provider>
  );
};

export const useSubCategory = () => {
  const context = useContext(SubCategoryContexts);

  if (context === undefined) {
    throw new Error("useSubCategory must be used within a SubCategoryProvider");
  }

  return context;
};
