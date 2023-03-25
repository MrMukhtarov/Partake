import React from "react";
import { useParams } from "react-router-dom";
import AboutSafe from "../../components/AboutComponents/AboutSafe/AboutSafe";
import ProdImgBox from "../../components/ProductsComponent/ProdImgBox/ProdImgBox";
import ProducstHeaderText from "../../components/ProductsComponent/ProductsHeaderText/ProducstHeaderText";
import { useCategory } from "../../components/Context/CategoryContext";

const ProdSubCategory = () => {
  // const {snack} = useCategory()
  const {category} = useCategory()
  // console.log(category);
  const { id } = useParams();
  


  return (
    <>
      <ProducstHeaderText />
      <div className="MainProducst">
        <div className="MainProducst-all d-flex justify-content-between">
          <div className="MainProducst-left col-lg-2 p-0">
            <ul>
              <li></li>
            </ul>
          </div>
          <div className="MainProducst-right col-lg-10"></div>
        </div>
      </div>
      <ProdImgBox />
      <AboutSafe />
    </>
  );
};

export default ProdSubCategory;
