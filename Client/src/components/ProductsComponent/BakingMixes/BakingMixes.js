import React from "react";
import "./BakingMixes.css";
import { useBakingMixes } from "../../Context/BakingMixesContext";
import { NavLink } from "react-router-dom";

const BakingMixes = () => {
  const { bakingMixes } = useBakingMixes();
  return (
    <div className="bakingMixes col-lg-12">
      <h2 className="title" id="bakingMixes">
        Baking Mixes
      </h2>
      <div className="bakingMixes-all row">
        {bakingMixes &&
          bakingMixes.map((best) => (
            <div key={best._id} className="bakingMixes-box">
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
                  <img className="img-fluid" src={best.img} alt={best.name} />
                  <div className="quick-add">
                    <NavLink to="/">QUICK ADD</NavLink>
                  </div>
                </div>
                <div className="bakingMixes-bottom">
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
  );
};

export default BakingMixes;
