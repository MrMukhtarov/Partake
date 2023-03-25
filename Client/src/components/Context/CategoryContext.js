import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

const CategoryContexts = createContext();

export const CategoryContext = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [snack, setSnack] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/category")
      .then((res) => setCategory(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/category")
      .then((res) => 
      setSnack(
        res.data.category.filter(a => a._id === '6409b0366fa11033b6f198be')
        )
        )
      .catch((err) => console.log(err));
  }, []);

  const values = {
    category,
    setCategory,
    snack
  };

  return (
    <CategoryContexts.Provider value={values}>
      {children}
    </CategoryContexts.Provider>
  );
};

export const useCategory = () => {
  const context = useContext(CategoryContexts);

  if (context === undefined) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }

  return context;
};
