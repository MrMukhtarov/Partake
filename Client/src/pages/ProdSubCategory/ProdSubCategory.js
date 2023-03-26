import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AboutSafe from "../../components/AboutComponents/AboutSafe/AboutSafe";
import ProdImgBox from "../../components/ProductsComponent/ProdImgBox/ProdImgBox";
import ProducstHeaderText from "../../components/ProductsComponent/ProductsHeaderText/ProducstHeaderText";
import axios from "axios";
import { useSubCategory } from "../../components/Context/SubCategoryContext";

// id gelir categorylerde o idni tapib idsi o olan categorynin sublarinin namelerini yazdirmaq

const ProdSubCategory = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const { subCategory } = useSubCategory();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/category/${id}`)
      .then((res) => setProducts(res.data.category))
      .catch((error) => console.log(error));
  }, [id]);

  for (let index = 0; index < products.subCategory?.length; index++) {
    const element = products.subCategory[index];
    for (let index = 0; index < subCategory?.length; index++) {
      const element2 = subCategory[index];
      if (element === element2._id) {
        console.log(element2.name);
      }
    }
  }

  return (
    <>
      <ProducstHeaderText />
      <div className="MainProducst">
        <div className="MainProducst-all d-flex justify-content-between">
          <div className="MainProducst-left col-lg-2 p-0">
            <ul></ul>
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
