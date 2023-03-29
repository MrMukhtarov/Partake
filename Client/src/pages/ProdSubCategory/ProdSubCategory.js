import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import AboutSafe from "../../components/AboutComponents/AboutSafe/AboutSafe";
import ProdImgBox from "../../components/ProductsComponent/ProdImgBox/ProdImgBox";
import ProducstHeaderText from "../../components/ProductsComponent/ProductsHeaderText/ProducstHeaderText";
import axios from "axios";
import { useSubCategory } from "../../components/Context/SubCategoryContext";
import "./ProdSubCategory.css";
import { useCategory } from "../../components/Context/CategoryContext";
import { useSnackPacks } from "../../components/Context/SnackPacksContext";
import { useVariety } from "../../components/Context/VarietyContext";
import { useCookies } from "../../components/Context/CookiesContext";
import { useBakingMixes } from "../../components/Context/BakingMixesContext";
import { useBreakFastMixes } from "../../components/Context/BreakfastMixesContext";
import { useBestSellerCategory } from "../../components/Context/BestSellerCategoryConetx";
// id gelir categorylerde o idni tapib idsi o olan categorynin sublarinin namelerini yazdirmaq

const ProdSubCategory = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const { subCategory } = useSubCategory();
  const snackList = [];
  const { category } = useCategory();
  const { snackPacks } = useSnackPacks();
  const { variety } = useVariety();
  const { cookies } = useCookies();
  const { bakingMixes } = useBakingMixes();
  const { breakfastMixes } = useBreakFastMixes();
  const { bestSellerCategory } = useBestSellerCategory();
  let name = "";
  const prod = [];

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
        snackList.push(element2.name);
      }
    }
  }

  for (let i = 0; i < category.category?.length; i++) {
    if (category.category[i]._id === id) {
      name += category.category[i].name;
    }
  }

  //snack
  for (let i = 0; i < snackPacks?.length; i++) {
    if (snackPacks[i].category[0] === id) {
      prod.push(snackPacks[i]);
    }
  }
  //snack
  //variety
  for (let i = 0; i < variety?.length; i++) {
    if (variety[i].category[0] === id) {
      prod.push(variety[i]);
    }
  }
  //variety
  //cookies
  for (let i = 0; i < cookies?.length; i++) {
    for (let z = 0; z < cookies[i].category?.length; z++) {
      if (cookies[i].category[z] === id) {
        prod.push(cookies[i]);
      }
    }
  }
  // //cookie
  //baking
  for (let i = 0; i < bakingMixes?.length; i++) {
    if (bakingMixes[i].category[0] === id) {
      prod.push(bakingMixes[i]);
    }
  }
  //baking
  //breakfast
  for (let i = 0; i < breakfastMixes?.length; i++) {
    if (breakfastMixes[i].category[0] === id) {
      prod.push(breakfastMixes[i]);
    }
  }
  //breakfast
  //best
  for (let i = 0; i < bestSellerCategory?.length; i++) {
    for (let z = 0; z < bestSellerCategory[i].category?.length; z++) {
      if (bestSellerCategory[i].category[z] === id) {
        prod.push(bestSellerCategory[i]);
      }
    }
  }
  //best

  let unique = [];
  function getUnique(arr, index) {
    unique = arr
      .map((e) => e[index])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter((e) => arr[e])
      .map((e) => arr[e]);

    return unique;
  }

  getUnique(prod, "_id")

  const MobileProducstMenu = () => {
    let menu = document.getElementById("prod-sub-category-mainUl");
    let icons = document.getElementById("down-menu");
    if (menu.style.opacity === "0") {
      menu.style.opacity = "1";
      menu.style.height = "100%";
      menu.style.transition = ".3s";
      icons.style.transform = "rotate(180deg)";
      icons.style.transition = ".5s";
    } else {
      menu.style.opacity = "0";
      menu.style.height = "0";
      menu.style.transition = ".3s";
      icons.style.transform = "rotate(0deg)";
      icons.style.transition = ".5s";
    }
  };

  return (
    <>
      <ProducstHeaderText />
      <div className="prod-sub-category">
        <h1 className="prod-sub-category-name">{name}</h1>
        <div className="prod-sub-category-all d-flex justify-content-between">
          <div className="prod-sub-category-left col-lg-2 p-0">
            <div
              onClick={MobileProducstMenu}
              id="prod-sub-category-menu-mobile"
            >
              <NavLink to="#">
                Category Selection{" "}
                <i id="down-menu" className="fa-solid fa-caret-down"></i>
              </NavLink>
            </div>
            <ul
              id="prod-sub-category-mainUl"
              style={{
                opacity: window.screen.width <= 576 ? "0" : "1",
                height: window.screen.width <= 576 ? "0" : "100",
              }}
            >
              {snackList && snackList.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
          <div className="prod-sub-category-right col-lg-10 mb-5">
            <div className="bakingMixes-all row">
              {unique &&
                unique.map((best) => (
                  <div key={best._id} className="prod-sub-category-box">
                    {best.status === "6403326e7694afa7307efdd8" && (
                      <div className="absolute">
                        <span>BEST</span>
                        <span>SELLER</span>
                      </div>
                    )}
                    {best.status === "640337f07694afa7307efdd9" && (
                      <div className="absolute">
                        <span>SOLD</span>
                        <span>OUT</span>
                      </div>
                    )}
                    {best.status === "640338097694afa7307efdda" && (
                      <div className="absolute">
                        <span>LIMITED</span>
                        <span>EDITION</span>
                      </div>
                    )}

                    <NavLink className="boxLink" to="/">
                      <div className="top">
                        <img
                          className="img-fluid"
                          src={best.img}
                          alt={best.name}
                        />
                        <div className="quick-add">
                          <NavLink to="/">QUICK ADD</NavLink>
                        </div>
                      </div>
                      <div className="prod-sub-category-bottom">
                        <NavLink to="/">{best.name}</NavLink>
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <span>{best.rating}</span>
                        </div>
                        <div className="price">
                          <span>From ${best.price}</span>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <ProdImgBox />
      <AboutSafe />
    </>
  );
};

export default ProdSubCategory;
