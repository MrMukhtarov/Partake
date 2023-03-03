import React from "react";
import { NavLink } from "react-router-dom";
import "./MainProducts.css";

const MainProducst = () => {
  const cookiesLi = () => {
    let drop = document.querySelector(".cookiesLi");
    let down = document.getElementById("down");
    if (drop.style.opacity === "0") {
      down.style.rotate = '180deg'
      down.style.transition = '.5s'
      drop.style.opacity = '1'
      drop.style.transition = '.5s'
      drop.style.height = '100%'
    } else {
      down.style.rotate = '0deg'
      down.style.transition = '.5s'
      drop.style.opacity = '0'
      drop.style.transition = '.2s'
      drop.style.height = '0'
    }
  };
  const MobileProducstMenu = () => {
    let menu = document.getElementById('MainProducst-mainUl')
    let icons = document.getElementById('down-menu')
    if(menu.style.opacity === '0'){
        menu.style.opacity = '1';
        menu.style.height = '100%';
        menu.style.transition = '.3s'
        icons.style.transform = 'rotate(180deg)'
        icons.style.transition = '.5s'
    }else{
        menu.style.opacity = '0';
        menu.style.height = '0';
        menu.style.transition = '.3s'
        icons.style.transform = 'rotate(0deg)'
        icons.style.transition = '.5s'
    }
  }
  return (
    <div className="MainProducst">
      <div className="all">
        <div className="MainProducst-left col-lg-3">
            <div onClick={MobileProducstMenu} id="MainProducst-menu-mobile">
                <NavLink  to='#'>Category Selection <i id="down-menu" className="fa-solid fa-caret-down"></i></NavLink>
            </div>
          <ul id="MainProducst-mainUl" style={{opacity: window.screen.width <= 576 ? '0' : '1'}}>
            <li>
              <NavLink onClick={cookiesLi} to="#">
                Cookies <i id="down" className="fa-solid fa-caret-down"></i>
              </NavLink>
            </li>
            <ul style={{ opacity: "0", height: '0' }} className="cookiesLi">
              <li>
                <NavLink to="#">Crunchy Cookies</NavLink>
              </li>
              <li>
                <NavLink to="#">Soft Baked Cookies</NavLink>
              </li>
            </ul>
            <li>
              <NavLink to="#">Baking Mixes</NavLink>
            </li>
            <li>
              <NavLink to="#">Breakfast Mixes</NavLink>
            </li>
            <li>
              <NavLink to="#">Variety Packs</NavLink>
            </li>
            <li>
              <NavLink to="#">Snack Packs</NavLink>
            </li>
            <li>
              <NavLink to="#">Gifts</NavLink>
            </li>
            <li>
              <NavLink to="#">Merch</NavLink>
            </li>
          </ul>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default MainProducst;