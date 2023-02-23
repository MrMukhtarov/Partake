import React from "react";
import { NavLink } from "react-router-dom";
import "./BestSellers.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useBestSeller } from "../../Context/BestSellersContext";

const BestSellers = () => {
  const { bestSeller } = useBestSeller();
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
  return (
    <div className="bestSellers">
      <h2 className="title">Shop Our Bestsellers</h2>
      {/* ---------------------- */}
      {/* ---------------Big-------------- */}
      <div className="crs">
        <OwlCarousel className="slider-items owl-carousel" {...options}>
          {bestSeller &&
            bestSeller.map((best) => (
              <div key={best._id} className="item">
                <div className="box col-lg-4 col-12">
                  <div className="absolute">
                    <span>BEST</span>
                    <span>SELLER</span>
                  </div>
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
                    <div className="bottom">
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
                        <span>From {best.price}</span>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            ))}
        </OwlCarousel>
      </div>
      {/* ---------------------- */}
      {/* ---------------Big-------------- */}

      <div className="all row">
        {bestSeller &&
          bestSeller.map((best) => (
            <div key={best._id} className="box col-lg-4 col-12">
              <div className="absolute">
                <span>BEST</span>
                <span>SELLER</span>
              </div>
              <NavLink className="boxLink" to="/">
                <div className="top">
                  <img className="img-fluid" src={best.img} alt={best.name} />
                  <div className="quick-add">
                    <NavLink to="/">QUICK ADD</NavLink>
                  </div>
                </div>
                <div className="bottom">
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
                    <span>From {best.price}</span>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BestSellers;
