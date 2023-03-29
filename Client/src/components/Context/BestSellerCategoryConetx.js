import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

const BestSellersCategoryContexts = createContext();

export const BestSellerCategoryContext = ({ children }) => {
  const [bestSellerCategory, setBestSellerCategory] = useState([]);
//   const arrs = [];

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) =>
        setBestSellerCategory(
          res.data.products.filter(
            (a) =>
            a.category[0] === "642315617ff6f3bfcf45df04" ||
            a.category[1] === "642315617ff6f3bfcf45df04" ||
            a.category[2] === "642315617ff6f3bfcf45df04" ||
            a.category[3] === "642315617ff6f3bfcf45df04"
          )
        )
      )
      .catch((err) => console.log(err));
  }, []);

//   for (let i = 0; i < arrs?.length; i++) {
//     for (let z = 0; z < arrs[i].category?.length; z++) {
//       if (arrs[i].category[z] === "642315617ff6f3bfcf45df04") {
//         setBestSellerCategory(arrs[i].category[z]);
//       }
//     }
//   }

  const values = {
    bestSellerCategory,
  };

  return (
    <BestSellersCategoryContexts.Provider value={values}>
      {children}
    </BestSellersCategoryContexts.Provider>
  );
};

export const useBestSellerCategory = () => {
  const context = useContext(BestSellersCategoryContexts);

  if (context === undefined) {
    throw new Error(
      "useBestSellerCategory must be used within a BestSellerCategoryProvider"
    );
  }

  return context;
};
