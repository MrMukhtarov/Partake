import React from "react";
import "./AboutHeader.css";

const AboutHeader = () => {
  return (
    <div className="aboutHeader">
      <div className="all">
        <div className="left col-lg-6 col-12">
          <h1>About Us</h1>
          <p>
            From humble beginnings to <br />
            the future of food.
          </p>
        </div>
        <div className="rigth col-lg-6 col-12">
            <img className="aboutImgNormal" src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/About_us_mobi.png?v=1671800210" alt="aboutBannerImg" />
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
