import React from "react";
import "./IngredientsStart.css";
import {NavLink} from 'react-router-dom'

const IngredientsStart = () => {
  return (
    <div className="IngredientsStart">
      <div className="IngredientsStart-all d-flex justify-content-center">
        <div className="IngredientsStart-left col-lg-6">
          <img
            className="img-fluid"
            src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/11_750x.png?v=1671785077"
            alt="IngredientsStart"
          />
        </div>
        <div className="IngredientsStart-right col-lg-5">
          <h2>It Starts with the Ingredients</h2>
          <p>
            Our products are gluten-free, vegan, non-GMO, and free from the top
            9 allergens—but that’s not all. We have meticulously curated each
            and every recipe to find the perfect combination of ingredients that
            are safe for those with food allergies, healthy AND absolutely
            delicious. Explore the fruits, vegetables, spices and more that make
            Partake safe and better-for-you products.
          </p>
          <NavLink to='/about'>LEARN MORE</NavLink>
        </div>
      </div>
    </div>
  );
};

export default IngredientsStart;
