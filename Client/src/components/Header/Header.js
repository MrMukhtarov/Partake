import React from "react";
import { NavLink } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./Header.css";
import BasketHeader from "../BasketHeader/BasketHeader";
import { useLogo } from "../Context/LogoContext";
import { useLocation } from "react-router-dom";
import { useCategory } from "../Context/CategoryContext";

const Header = () => {
  const { snack, cookie, variety, baking, breakfast, best } = useCategory();
  const location = useLocation();
  const { logo } = useLogo([]);

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

  const about = () => {
    location.reload();
  };
  // producstDropDown
  const prodEnter = () => {
    if (location.pathname === "/") {
      document.getElementById("prodDrop").style.display = "block";
      document.querySelector("header").style.backgroundColor = "white";
      document.querySelector("header").style.transition = ".5s";
      document.querySelector(".logo").src = logo[0].img[1];
    } else if (location.pathname.includes("/products")) {
      document.getElementById("prodDrop").style.display = "block";
      document.querySelector("header").style.backgroundColor = "white";
      document.querySelector("header").style.transition = ".5s";
      document.querySelector(".logo").src = logo[0].img[1];
      document.getElementById("header").style.backgroundImage =
        "url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/2048px-Solid_white.svg.png)";
      const allLink = document.querySelectorAll(".headera");
      for (let i = 0; i < allLink.length; i++) {
        allLink[i].style.color = "#005099";
      }
    } else {
      document.getElementById("prodDrop").style.display = "block";
      document.querySelector("header").style.backgroundColor = "white";
      document.querySelector("header").style.transition = ".5s";
      document.querySelector(".logo").src = logo[0].img[1];
    }
  };

  const prodLevae = () => {
    if (location.pathname === "/") {
      document.getElementById("prodDrop").style.display = "none";
      document.querySelector(".logo").src = logo[0].img[0];
      document.querySelector("header").style.backgroundColor = "#FABFA8";
      document.querySelector("header").style.transition = ".5s";
    } else if (location.pathname.includes("/products")) {
      document.getElementById("prodDrop").style.display = "none";
      document.querySelector(".logo").src = logo[0].img[0];
      document.querySelector("header").style.backgroundColor = "white";
      document.querySelector("header").style.transition = ".5s";
      document.getElementById("header").style.backgroundImage =
        "url(https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Untitled_design_-_2022-05-09T181037.683_1500x.png?v=1652134275)";
      const allLink = document.querySelectorAll(".headera");
      for (let i = 0; i < allLink.length; i++) {
        allLink[i].style.color = "white";
      }
    } else {
      document.getElementById("prodDrop").style.display = "none";
      document.querySelector(".logo").src = logo[0].img[1];
      document.querySelector("header").style.backgroundColor = "white";
      document.querySelector("header").style.transition = ".5s";
    }
  };
  // producstDropDown
  // ------------------
  // ourstoryDropDown
  const storyOpen = () => {
    if (location.pathname === "/") {
      document.getElementById("ourStory").style.display = "block";
      document.getElementById("ourStory").style.opacity = "1";
      document.getElementById("ourStory").style.transition =
        "opacity 1s ease-out";
      document.querySelector("header").style.backgroundColor = "white";
      document.querySelector("header").style.transition = ".5s";
      document.querySelector(".logo").src = logo[0].img[1];
    } else if (location.pathname.includes("/products")) {
      document.getElementById("ourStory").style.display = "block";
      document.getElementById("ourStory").style.opacity = "1";
      document.getElementById("ourStory").style.transition =
        "opacity 1s ease-out";
      document.querySelector("header").style.backgroundColor = "white";
      document.querySelector("header").style.transition = ".5s";
      document.querySelector(".logo").src = logo[0].img[1];
      document.getElementById("header").style.backgroundImage =
        "url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/2048px-Solid_white.svg.png)";
      const allLink = document.querySelectorAll(".headera");
      for (let i = 0; i < allLink.length; i++) {
        allLink[i].style.color = "#005099";
      }
    } else {
      document.getElementById("ourStory").style.display = "block";
      document.getElementById("ourStory").style.opacity = "1";
      document.getElementById("ourStory").style.transition =
        "opacity 1s ease-out";
      document.querySelector("header").style.backgroundColor = "white";
      document.querySelector("header").style.transition = ".5s";
      document.querySelector(".logo").src = logo[0].img[1];
    }
  };
  const storyClose = () => {
    if (location.pathname === "/") {
      document.getElementById("ourStory").style.display = "none";
      document.getElementById("ourStory").style.opacity = "0";
      document.getElementById("ourStory").style.transition =
        "opacity 1s ease-out";
      document.querySelector(".logo").src = logo[0].img[0];
      document.querySelector("header").style.backgroundColor = "#FABFA8";
      document.querySelector("header").style.transition = ".5s";
    } else if (location.pathname.includes("/products")) {
      document.getElementById("ourStory").style.display = "none";
      document.getElementById("ourStory").style.opacity = "0";
      document.getElementById("ourStory").style.transition =
        "opacity 1s ease-out";
      document.querySelector(".logo").src = logo[0].img[0];
      document.querySelector("header").style.backgroundColor = "white";
      document.querySelector("header").style.transition = ".5s";
      document.getElementById("header").style.backgroundImage =
        "url(https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Untitled_design_-_2022-05-09T181037.683_1500x.png?v=1652134275)";
      const allLink = document.querySelectorAll(".headera");
      for (let i = 0; i < allLink.length; i++) {
        allLink[i].style.color = "white";
      }
    } else {
      document.getElementById("ourStory").style.display = "none";
      document.getElementById("ourStory").style.opacity = "0";
      document.getElementById("ourStory").style.transition =
        "opacity 1s ease-out";
      document.querySelector(".logo").src = logo[0].img[1];
      document.querySelector("header").style.backgroundColor = "white";
      document.querySelector("header").style.transition = ".5s";
    }
  };
  // ourstoryDropDown
  // -----------------
  // blogDropDown
  const blogOpen = () => {
    if (location.pathname === "/") {
      document.getElementById("blogDropDown").style.display = "block";
      document.querySelector("header").style.backgroundColor = "white";
      document.querySelector("header").style.transition = ".5s";
      document.querySelector(".logo").src = logo[0].img[1];
    } else if (location.pathname.includes("/products")) {
      document.getElementById("blogDropDown").style.display = "block";
      document.querySelector("header").style.backgroundColor = "white";
      document.querySelector("header").style.transition = ".5s";
      document.querySelector(".logo").src = logo[0].img[1];
      document.getElementById("header").style.backgroundImage =
        "url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/2048px-Solid_white.svg.png)";
      const allLink = document.querySelectorAll(".headera");
      for (let i = 0; i < allLink.length; i++) {
        allLink[i].style.color = "#005099";
      }
    } else {
      document.getElementById("blogDropDown").style.display = "block";
      document.querySelector("header").style.backgroundColor = "white";
      document.querySelector("header").style.transition = ".5s";
      document.querySelector(".logo").src = logo[0].img[1];
    }
  };
  const blogClose = () => {
    if (location.pathname === "/") {
      document.getElementById("blogDropDown").style.display = "none";
      document.querySelector(".logo").src = logo[0].img[0];
      document.querySelector("header").style.backgroundColor = "#FABFA8";
      document.querySelector("header").style.transition = ".5s";
    } else if (location.pathname.includes("/products")) {
      document.getElementById("blogDropDown").style.display = "none";
      document.querySelector(".logo").src = logo[0].img[0];
      document.querySelector("header").style.backgroundColor = "white";
      document.querySelector("header").style.transition = ".5s";
      document.getElementById("header").style.backgroundImage =
        "url(https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Untitled_design_-_2022-05-09T181037.683_1500x.png?v=1652134275)";
      const allLink = document.querySelectorAll(".headera");
      for (let i = 0; i < allLink.length; i++) {
        allLink[i].style.color = "white";
      }
    } else {
      document.getElementById("blogDropDown").style.display = "none";
      document.querySelector(".logo").src = logo[0].img[1];
      document.querySelector("header").style.backgroundColor = "white";
      document.querySelector("header").style.transition = ".5s";
    }
  };
  // blogDropDown
  // input
  const searchIcon = () => {
    document.getElementById("searchDiv").style.display = "block";
    document.body.classList.add("stop-scrolling");
  };
  const exitIcon = () => {
    document.getElementById("searchDiv").style.display = "none";
    document.body.classList.remove("stop-scrolling");
  };
  const hidePopup = () => {
    document.getElementById("searchDiv").style.display = "none";
    document.body.classList.remove("stop-scrolling");
  };
  // input
  // --------------
  // BASKET
  const basketOpen = () => {
    document.querySelector(".basketHeader").style.display = "block";
    document.body.classList.add("stop-scrolling");
  };

  const openBurger = () => {
    document.getElementById("burgers").style.display = "block";
    document.body.classList.add("stop-scrolling");
  };
  return (
    <header
      id="header"
      style={{
        background: window.location.pathname !== "/" ? "white" : "#FABFA8",
        backgroundImage: location.pathname.includes("/products")
          ? "url(https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Untitled_design_-_2022-05-09T181037.683_1500x.png?v=1652134275)"
          : "",
        paddingBottom: location.pathname.includes("/products") ? "280px" : "",
        backgroundSize: location.pathname.includes("/products") ? "100%" : "",
        backgroundRepeat: location.pathname.includes("/products")
          ? "no-repeat"
          : "",
      }}
    >
      <div
        className={`hideindesktop`}
        style={{
          backgroundImage: window.location.pathname.includes("/products")
            ? "url(https://cdn.shopify.com/s/files/1/0012/2296/7353/files/MA_Partake_5-layers_1.5x.png?v=1640863314)"
            : "",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="container">
        <div className="row justify-content-between align-items-center all">
          <div className="left col-lg-4 col-3">
            <NavLink
              style={{
                color: location.pathname.includes("/products") ? "white" : "",
              }}
              onClick={() => location.reload()}
              onMouseEnter={prodEnter}
              onMouseLeave={prodLevae}
              id="pr"
              className="tab headera"
              to={"/products"}
            >
              Products
            </NavLink>
            <NavLink
              style={{
                color: location.pathname.includes("/products") ? "white" : "",
              }}
              onMouseEnter={storyOpen}
              onMouseLeave={storyClose}
              className="tab headera"
              to={"/"}
            >
              Our Story
            </NavLink>
            <NavLink
              style={{
                color: location.pathname.includes("/products") ? "white" : "",
              }}
              className="tab headera"
              to={"/ingredients"}
              onClick={() => location.reload()}
            >
              Ingredients
            </NavLink>
            {/* media-mobile burger-menu icon */}
            <i
              style={{
                color: location.pathname.includes("/products") ? "white" : "",
              }}
              onClick={openBurger}
              className="fa-solid fa-bars burger headera"
            ></i>
            {/* media-mobile search icon */}
            <i
              style={{
                color: location.pathname.includes("/products") ? "white" : "",
              }}
              onClick={searchIcon}
              className="fa-solid fa-magnifying-glass ml-4 mediaSearch headera"
              title="search"
            ></i>
          </div>
          {logo &&
            logo.map((logos) => (
              <div key={logos._id} className="center col-lg-4 col-6">
                {window.location.pathname === "/" ||
                window.location.pathname.includes("/products") ? (
                  <NavLink to={"/"}>
                    <img className="logo" src={logos.img[0]} alt="logo" />
                  </NavLink>
                ) : (
                  <NavLink to={"/"}>
                    <img className="logo" src={logos.img[1]} alt="logo" />
                  </NavLink>
                )}
              </div>
            ))}
          <div className="right col-lg-3 align-items-center col-3 me-0 pe-0">
            <NavLink
              style={{
                color: location.pathname.includes("/products") ? "white" : "",
              }}
              className="tab headera"
              to={"/"}
            >
              Find Us
            </NavLink>
            <NavLink
              style={{
                color: location.pathname.includes("/products") ? "white" : "",
              }}
              onMouseEnter={blogOpen}
              onMouseLeave={blogClose}
              className="tab headera"
              to={"/"}
            >
              Blog
            </NavLink>
            <i
              style={{
                color: location.pathname.includes("/products") ? "white" : "",
              }}
              onClick={searchIcon}
              className="fa-solid fa-magnifying-glass ml-4 searchNav headera"
              title="search"
            ></i>
            <i
              style={{
                color: location.pathname.includes("/products") ? "white" : "",
              }}
              className="fa-solid fa-user headera"
            ></i>
            {/* bakset icon */}
            <i
              style={{
                color: location.pathname.includes("/products") ? "white" : "",
              }}
              onClick={basketOpen}
              className="fa-solid fa-cart-shopping headera"
              title="basket"
            ></i>
            {/* bakset icon */}
          </div>

          {/* Drop Down Products */}
          <div
            id="prodDrop"
            onMouseEnter={prodEnter}
            onMouseLeave={prodLevae}
            className="producsDropDown bg-white"
          >
            <div className="d-flex">
              <div className="left col-lg-2">
                <NavLink
                  onClick={() => location.reload()}
                  to={`/products/${best_id}`}
                >
                  Best Sellers
                </NavLink>
                <NavLink
                  onClick={() => location.reload()}
                  to={`/products/${snack_id}`}
                >
                  Snack Packs
                </NavLink>
                <NavLink to={"/"}>Loyality Program</NavLink>
                <NavLink to={"/"}>Build Your Own</NavLink>
              </div>
              <div className="right col-lg-10">
                <div className="box col-lg-3 text-center">
                  <NavLink
                    to={`/products/${variety_id}`}
                    onClick={() => location.reload()}
                  >
                    <img
                      className="img-fluid mb-2"
                      src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/menu-1.png?v=1640771968"
                      alt="img"
                    />
                  </NavLink>
                  <NavLink
                    onClick={() => location.reload()}
                    className="boxLink"
                    to={`/products/${variety_id}`}
                  >
                    <br /> VARIETY PACKS
                  </NavLink>
                </div>
                <div className="box col-lg-3 text-center">
                  <NavLink
                    to={`/products/${cookie_id}`}
                    onClick={() => location.reload()}
                  >
                    <img
                      className="img-fluid mb-2"
                      src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/menu-2.png?v=1640771968"
                      alt="img"
                    />
                  </NavLink>
                  <NavLink
                    className="boxLink"
                    to={`/products/${cookie_id}`}
                    onClick={() => location.reload()}
                  >
                    <br />
                    COOKIES
                  </NavLink>
                </div>
                <div className="box col-lg-3 text-center">
                  <NavLink
                    to={`/products/${baking_id}`}
                    onClick={() => location.reload()}
                  >
                    <img
                      className="img-fluid mb-2"
                      src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Baking_Mixes_Main_Menu_771a0291-8df9-4274-a0d8-5d23b709c8e1.png?v=1642497529"
                      alt="img"
                    />
                  </NavLink>
                  <NavLink
                    className="boxLink"
                    to={`/products/${baking_id}`}
                    onClick={() => location.reload()}
                  >
                    <br />
                    BAKING MIXES
                  </NavLink>
                </div>
                <div className="box col-lg-3 text-center">
                  <NavLink
                    to={`/products/${breakfast_id}`}
                    onClick={() => location.reload()}
                  >
                    <img
                      className="img-fluid mb-2"
                      src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Breakfast_Mixes_Main_Menu_ceee14d2-324b-4824-ab8e-07945334bfef.png?v=1642497596"
                      alt="img"
                    />
                  </NavLink>
                  <br />
                  <NavLink
                    className="boxLink"
                    to={`/products/${breakfast_id}`}
                    onClick={() => location.reload()}
                  >
                    BREAKFAST MIXES
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          {/* End Of The DropDown Products */}
          {/* ----------------------------------- */}
          {/* Our Story Drop Dopw Start */}
          <div
            id="ourStory"
            onMouseEnter={storyOpen}
            onMouseLeave={storyClose}
            className="ourstory"
          >
            <div className="containerOurStory">
              <div className="d-flex">
                <div className="box col-lg-3 text-center">
                  <NavLink onClick={about} to="/about">
                    {" "}
                    <img
                      className="img-fluid"
                      src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Denise_Vivi_Homepage_square.jpg?v=1642469781"
                      alt="img"
                    />
                    <br /> ABOUT US
                  </NavLink>
                </div>
                <div className="box col-lg-3 text-center">
                  <NavLink to="/">
                    {" "}
                    <img
                      className="img-fluid"
                      src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/FAQ_556_556_1.png?v=1642470306"
                      alt="img"
                    />
                    <br /> FAQ
                  </NavLink>
                </div>
                <div className="box col-lg-3 text-center">
                  <NavLink onClick={() => location.reload()} to="/ingredients">
                    {" "}
                    <img
                      className="img-fluid"
                      src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Ingredients_Menu_220x220_a254a351-a43f-4326-9630-6b50707c68ff.png?v=1642081962"
                      alt="img"
                    />
                    <br /> INGREDIETNS
                  </NavLink>
                </div>
                <div className="box col-lg-3 text-center">
                  <NavLink onClick={() => location.reload()} to="/press">
                    {" "}
                    <img
                      className="img-fluid"
                      src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/press_menu_750x.png?v=1642470439"
                      alt="img"
                    />
                    <br /> PRESS
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          {/* Our Story Drop Dopw End */}
          {/* ------------------------------ */}
          {/* blog dorpDown start */}
          <div
            id="blogDropDown"
            onMouseEnter={blogOpen}
            onMouseLeave={blogClose}
            className="blogDropDown"
          >
            <div className="containerblogDropDown">
              <div className="d-flex">
                <div className="box col-lg-4 text-center">
                  <NavLink to="/">
                    {" "}
                    <img
                      className="w-100"
                      src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/From_the_blog_Menu_220x220_9832e985-14cf-4d41-a65e-f1d1ea2a1522.png?v=1642082421"
                      alt="img"
                    />
                    FROM THE BLOG
                  </NavLink>
                </div>
                <div className="box col-lg-4 text-center">
                  <NavLink to="/">
                    {" "}
                    <img
                      className="w-100"
                      src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Recipes_Menu_220x220_71d62ea7-69c1-4b81-a25f-e288f1e688a1.png?v=1642082702"
                      alt="img"
                    />
                    PARTAKE RECIEPES
                  </NavLink>
                </div>
                <div className="box col-lg-4 text-center">
                  <NavLink to="/">
                    {" "}
                    <img
                      className="w-100"
                      src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/From_Denise_Menu_2_220x220_b48d2c3f-45a2-403c-a5f8-dcbe9c3368e7.png?v=1642112887"
                      alt="img"
                    />
                    FROM DENISE
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          {/* blog dorpDown end */}
          {/* --------------- */}
          {/* search */}
          <div id="searchDiv" className="search">
            <div className="blocker" onClick={hidePopup}></div>
            <div className="searchContainer">
              <div className="all">
                <div className="top d-flex justify-content-center align-items-center">
                  <div className="left col-lg-5 col-11">
                    <div className="inputdiv d-flex">
                      <input
                        id="inputSearch"
                        type="text"
                        name="search"
                        placeholder="Search"
                      />
                      <i className="fa-solid fa-magnifying-glass text-end"></i>
                    </div>
                  </div>
                  <div className="right col-1 p-0">
                    <i
                      onClick={exitIcon}
                      className="fa-solid fa-xmark"
                      title="close"
                    ></i>
                  </div>
                </div>
                <div className="bottom"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BasketHeader />
      <BurgerMenu id="burgers" />
    </header>
  );
};

export default Header;
