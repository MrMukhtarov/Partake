import React from "react";
import "./PressBanner.css";

const PressBanner = () => {
  return (
    <div className="PressBanner">
      <div className="all">
        <div className="imgDiv">
          <img
            className="img1 img-fluid"
            src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/press_page-desktop.jpg?v=1671786022"
            alt="pressImg"
          />
          <img
            className=" imgDiv2 col-12"
            src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/press_page-desktop_1.jpg?v=1671786052"
            alt="pressImg"
          />
        </div>
       
        <div className="content">
            <h1>In the News</h1>
            <p>Read all about us.</p>
          </div>
      </div>
    </div>
  );
};

export default PressBanner;
