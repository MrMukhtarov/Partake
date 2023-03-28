import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

const CategoryContexts = createContext();

export const CategoryContext = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [snack, setSnack] = useState([]);
  const [variety, setVariety] = useState();
  const [cookie, setCookie] = useState();
  const [baking, setBaking] = useState();
  const [breakfast, setBreakFast] = useState();
  const [best, setBest] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/category")
      .then((res) => setCategory(res.data))
      .catch((err) => console.log(err));
  }, []);

  //snack
  useEffect(() => {
    axios
      .get("http://localhost:3001/category")
      .then((res) =>
        setSnack(
          res.data.category.filter((a) => a._id === "6409b0366fa11033b6f198be")
        )
      )
      .catch((err) => console.log(err));
  }, []);
  //snack

  //vatiety packs
  useEffect(() => {
    axios
      .get("http://localhost:3001/category")
      .then((res) =>
        setVariety(
          res.data.category.filter((a) => a._id === "640601c2dfe74d519c496be6")
        )
      )
      .catch((err) => console.log(err));
  }, []);
  //vatiety packs

  //cookie
  useEffect(() => {
    axios
      .get("http://localhost:3001/category")
      .then((res) =>
        setCookie(
          res.data.category.filter((a) => a._id === "6422f5a89a86689b900c26af")
        )
      )
      .catch((err) => console.log(err));
  }, []);
  //cookie

  //baking
  useEffect(() => {
    axios
      .get("http://localhost:3001/category")
      .then((res) =>
        setBaking(
          res.data.category.filter((a) => a._id === "6405cc6bdfe74d519c496be4")
        )
      )
      .catch((err) => console.log(err));
  }, []);
  //baking

  //breakfast
  useEffect(() => {
    axios
      .get("http://localhost:3001/category")
      .then((res) =>
        setBreakFast(
          res.data.category.filter((a) => a._id === "6405f728dfe74d519c496be5")
        )
      )
      .catch((err) => console.log(err));
  }, []);
  //breakfast

  //best
  useEffect(() => {
    axios
      .get("http://localhost:3001/category")
      .then((res) =>
        setBest(
          res.data.category.filter((a) => a._id === "642315617ff6f3bfcf45df04")
        )
      )
      .catch((err) => console.log(err));
  }, []);
  //best

  const values = {
    category,
    setCategory,
    snack,
    variety,
    cookie,
    baking,
    breakfast,
    best,
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
