import React from "react";
import "./PressFeatire.css";

const PressFeature = () => {
  return (
    <div className="PressFeature">
      <h1 className="headerFeature">Feature Stories</h1>
      <div className="all d-flex">
        <div className="PressFeatureLeft col-lg-6 col-11">
          <div className="name">NOSH</div>
          <p>NOSH Announces Nominees for ‘Best of 2022’ Awards</p>
          <span>November 14, 2022</span>
        </div>
        <div className="PressFeatureRight col-lg-6">
          <div className="rightTop">
            <div className="name">INC.</div>
            <p>
              A Business-Minded Mom Makes Sweet Treats Safe for EveryoneDenise
              Woodard's daughter inspired her, but her new company is really
              about inclusion for all
            </p>
            <span>September 2022</span>
          </div>
          <div className="rightBottom d-flex gap-3">
            <div className="righBottomLeft">
              <div className="name">Snack Food & Wholesale Bakery</div>
              <p>Partake Foods announces B Corporation Certification</p>
              <span>January 4, 2023</span>
            </div>
            <div className="righBottomRight">
              <div className="name">Parade</div>
              <p>
                Ben & Jerry's Unveils First New Flavor of 2023—And It's Dreamy
              </p>
              <span>January 10, 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressFeature;
