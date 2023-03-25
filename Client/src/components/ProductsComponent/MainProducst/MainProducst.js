import React from "react";
import { NavLink } from "react-router-dom";
import BakingMixes from "../BakingMixes/BakingMixes";
import BreakFastMixes from "../BreakFastMixes/BreakFastMixes";
import CrunchyCookies from "../CruncyCookies/CrunchyCookies";
import Gifts from "../Gifts/Gifts";
import Merch from "../Merch/Merch";
// import ProdImgBox from "../ProdImgBox/ProdImgBox";
import SnackPack from "../SnackPack/SnackPack";
import SoftBaked from "../SoftBaked/SoftBaked";
import Variety from "../Variety/Variety";
import "./MainProducts.css";

const MainProducst = () => {
  const cookiesLi = () => {
    let drop = document.querySelector(".cookiesLi");
    let down = document.getElementById("down");
    if (drop.style.opacity === "0") {
      down.style.rotate = "180deg";
      down.style.transition = ".5s";
      drop.style.opacity = "1";
      drop.style.transition = ".5s";
      drop.style.height = "100%";
      drop.style.pointerEvents = "auto";
    } else {
      down.style.rotate = "0deg";
      down.style.transition = ".5s";
      drop.style.opacity = "0";
      drop.style.transition = ".2s";
      drop.style.height = "0";
      drop.style.pointerEvents = "none";
    }
  };
  const MobileProducstMenu = () => {
    let menu = document.getElementById("MainProducst-mainUl");
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
    <div className="MainProducst">
      <div className="MainProducst-all d-flex justify-content-between">
        <div className="MainProducst-left col-lg-2 p-0">
          <div onClick={MobileProducstMenu} id="MainProducst-menu-mobile">
            <NavLink to="#">
              Category Selection{" "}
              <i id="down-menu" className="fa-solid fa-caret-down"></i>
            </NavLink>
          </div>
          <ul
            id="MainProducst-mainUl"
            style={{ opacity: window.screen.width <= 576 ? "0" : "1" }}
          >
            <li>
              <NavLink onClick={cookiesLi} to="#">
                Cookies <i id="down" className="fa-solid fa-caret-down"></i>
              </NavLink>
            </li>
            <ul
              style={{ opacity: "0", height: "0", pointerEvents: "none" }}
              className="cookiesLi"
            >
              <li>
                <a href="#crunchy">Crunchy Cookies</a>
              </li>
              <li>
                <a href="#softBaked">Soft Baked Cookies</a>
              </li>
            </ul>
            <li>
              <a href="#bakingMixes">Baking Mixes</a>
            </li>
            <li>
              <a href="#breakfastMixes">Breakfast Mixes</a>
            </li>
            <li>
              <a href="#variety">Variety Packs</a>
            </li>
            <li>
              <a href="#SnackPack">Snack Packs</a>
            </li>
            <li>
              <a href="#gift">Gifts</a>
            </li>
            <li>
              <a href="#merch">Merch</a>
            </li>
          </ul>
        </div>
        <div className="MainProducst-right col-lg-10">
          <CrunchyCookies />
          <SoftBaked />
          <BakingMixes />
          <BreakFastMixes />
          <Variety />
          <SnackPack />
          <Gifts />
          <Merch />
        </div>
      </div>
      {/* <ProdImgBox /> */}
    </div>
  );
};

export default MainProducst;
