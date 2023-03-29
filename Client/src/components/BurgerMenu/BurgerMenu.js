import React from "react";
import { NavLink } from "react-router-dom";
import "./BurgerMenu.css";
import { useCategory } from "../Context/CategoryContext";
import { useLocation } from "react-router-dom";

const BurgerMenu = () => {
  const { snack, cookie, variety, baking, breakfast, best } = useCategory();
  const location = useLocation();

  const snack_id = snack?.map((item) => {
    return item._id;
  });
  const variety_id = variety?.map((item) => {
    return item._id;
  });
  const cookie_id = cookie?.map((item) => {
    return item._id;
  });
  const baking_id = baking?.map((item) => {
    return item._id;
  });
  const breakfast_id = breakfast?.map((item) => {
    return item._id;
  });
  const best_id = best?.map((item) => {
    return item._id;
  });
  const tabli1 = () => {
    let one = document.querySelector(".tabli1");
    let down1 = document.getElementById("down1");
    if (one.style.display === "none") {
      one.style.display = "block";
      down1.className = "fa-solid fa-caret-up down";
      document.getElementById("bottoms").style.top = "0";
    } else {
      one.style.display = "none";
      down1.className = "fa-solid fa-caret-down down";
      document.getElementById("bottoms").style.bottom = "300px";
    }
  };

  const tabli2 = () => {
    let one = document.querySelector(".tabli2");
    let down2 = document.getElementById("down2");
    if (one.style.display === "none") {
      one.style.display = "block";
      down2.className = "fa-solid fa-caret-up down";
    } else {
      one.style.display = "none";
      down2.className = "fa-solid fa-caret-down down";
    }
  };

  const tabli3 = () => {
    let one = document.querySelector(".tabli3");
    let down3 = document.getElementById("down3");
    if (one.style.display === "none") {
      one.style.display = "block";
      down3.className = "fa-solid fa-caret-up down blogi";
    } else {
      one.style.display = "none";
      down3.className = "fa-solid fa-caret-down down blogi";
    }
  };

  const close = () => {
    document.getElementById("burgers").style.display = "none";
    document.body.classList.remove("stop-scrolling");
  };
  const CloseBurgers = () => {
    document.getElementById("burgers").style.display = "none";
    document.body.classList.remove("stop-scrolling");
  };
  
  return (
    <div className="burgerMenu" id="burgers">
      <div className="burgerContainer">
        <i
          onClick={close}
          className="fa-solid fa-xmark mb-4 exit"
          title="close"
        ></i>
        <div className="all">
          <div className="top d-flex">
            <ul>
              <li className="tabName" onClick={tabli1}>
                PRODUCTS{" "}
                <i id="down1" className="fa-solid fa-caret-down down"></i>
              </li>
              <ul className="tabli1" style={{ display: "none" }}>
                <li className="mt-3">
                  <NavLink to="/products" onClick={CloseBurgers}>
                    Products All
                  </NavLink>
                </li>
                <li className="mt-3">
                  <NavLink
                    onClick={() => location.reload()}
                    to={`/products/${best_id}`}
                  >
                    Best Sellers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => location.reload()}
                    to={`/products/${snack_id}`}
                  >
                    Snack Packs
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">Gifts</NavLink>
                </li>
                <li>
                  <NavLink to="/">Loyality Program</NavLink>
                </li>
                <li>
                  <NavLink to="/">Build Your Own</NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => location.reload()}
                    to={`/products/${variety_id}`}
                  >
                    Variety Packs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => location.reload()}
                    to={`/products/${cookie_id}`}
                  >
                    Cookies
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => location.reload()}
                    to={`/products/${baking_id}`}
                  >
                    Baking Mixes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => location.reload()}
                    to={`/products/${breakfast_id}`}
                  >
                    Breakfast Mixes
                  </NavLink>
                </li>
              </ul>

              <hr className="hr" />
              <li onClick={tabli2} className="tabName">
                OUR STORY{" "}
                <i id="down2" className="fa-solid fa-caret-down down"></i>
              </li>
              <ul className="tabli2" style={{ display: "none" }}>
                <li className="mt-3">
                  <NavLink to="/about" onClick={CloseBurgers}>
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">FAQ</NavLink>
                </li>
                <li>
                  <NavLink to="/ingredients" onClick={CloseBurgers}>
                    Ingredients
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/press" onClick={CloseBurgers}>
                    Press
                  </NavLink>
                </li>
              </ul>
              <hr className="hr" />
              <li>
                <NavLink
                  className="tabName"
                  to="/ingredients"
                  onClick={CloseBurgers}
                >
                  INGREDIENTS
                </NavLink>
              </li>
              <hr className="hr" />
              <li>
                <NavLink className="tabName" to="/">
                  FIND US
                </NavLink>
              </li>
              <hr className="hr" />
              <li onClick={tabli3} className="tabName">
                BLOG{" "}
                <i id="down3" className="fa-solid fa-caret-down down blogi"></i>
              </li>
              <ul className="tabli3" style={{ display: "none" }}>
                <li className="mt-3">
                  <NavLink to="/">From the Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/">From Denise</NavLink>
                </li>
                <li>
                  <NavLink to="/">Partake Recipes</NavLink>
                </li>
                <li>
                  <NavLink to="/">Press</NavLink>
                </li>
              </ul>
              <hr className="hr" />
              <ul className="bottom bottoms">
                <NavLink to="/">
                  <li>
                    <i className="fa-brands fa-facebook"></i>
                  </li>
                </NavLink>
                <NavLink to="/">
                  <li>
                    <i className="fa-brands fa-instagram"></i>
                  </li>
                </NavLink>
                <NavLink to="/">
                  <li>
                    <i className="fa-brands fa-twitter"></i>
                  </li>
                </NavLink>
                <NavLink to="/">
                  <li>
                    <i className="fa-brands fa-pinterest"></i>
                  </li>
                </NavLink>
                <NavLink to="/">
                  <li>
                    <i className="fa-brands fa-tiktok"></i>
                  </li>
                </NavLink>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
