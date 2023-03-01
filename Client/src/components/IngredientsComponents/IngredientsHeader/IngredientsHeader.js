import React from "react";
import "./IngredientsHeader.css";

const IngredientsHeader = () => {
  return (
    <div className="IngredientsHeader">
      <div className="IngredientsHeader-all d-flex align-items-center">
        <div className="IngredientsHeader-left col-lg-6 col-12">
          <h1>Ingredients</h1>
          <p>What’s Inside</p>
        </div>
        <div className="IngredientsHeader-right col-lg-6 col-12">
          <img
            className="img-fluid"
            src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Ingredients_desktop.png?v=1671801641"
            alt="IngredientsHeader"
          />
          <img
            className="IngredientsHeader-mobile"
            src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/SL2A8496-Edit_2_2.png?v=1671784851"
            alt="IngredientsHeader"
          />
        </div>
      </div>
    </div>
  );
};

export default IngredientsHeader;
