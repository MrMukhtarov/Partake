import React from "react";
import AboutSafe from "../components/AboutComponents/AboutSafe/AboutSafe";
import MainProducst from "../components/ProductsComponent/MainProducst/MainProducst";
import ProdImgBox from "../components/ProductsComponent/ProdImgBox/ProdImgBox";
import ProducstHeaderText from "../components/ProductsComponent/ProductsHeaderText/ProducstHeaderText";

const Products = () => {
  return (
    <div>
      <ProducstHeaderText />
      <MainProducst />
      <ProdImgBox />
      <AboutSafe />
    </div>
  );
};

export default Products;
