import React from "react";
import AboutSafe from "../components/AboutComponents/AboutSafe/AboutSafe";
import MainProducst from "../components/ProductsComponent/MainProducst/MainProducst";
import ProducstHeaderText from "../components/ProductsComponent/ProductsHeaderText/ProducstHeaderText";

const Products = () => {
  return (
    <div>
      <ProducstHeaderText />
      <MainProducst />
      <AboutSafe />
    </div>
  );
};

export default Products;
