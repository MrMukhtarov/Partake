import React from "react";
import "./MainDetail.css";

const MainDetail = () => {
  const ChangePhoto = () => {
    let mini = document.getElementById("miniImg").src;
    document.getElementById("bigImg").src = mini;
  };

  return (
    <div className="MainDetail">
      <div className="MainDetail-all d-flex">
        <div className="MainDetail-left col-lg-6">
          <div className="MainDetail-left-left-box">
            <div className="MainDetail-left-left-box-boxes">
              <img
                onClick={ChangePhoto}
                id="miniImg"
                src="https://cdn.shopify.com/s/files/1/0012/2296/7353/products/Partake_CC_Nutritionalcopy_1100x.png?v=1646839332"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="MainDetail-left-left-box-boxes">
              <img
                src="https://cdn.shopify.com/s/files/1/0012/2296/7353/products/CrunchyCC_2400x2400_45angle_1100x.png?v=1646839332"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="MainDetail-left-right">
            <img
              id="bigImg"
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/products/CrunchyCC_2400x2400_45angle_1100x.png?v=1646839332"
              alt=""
            />
          </div>
        </div>
        <div className="MainDetail-right col-lg-6"></div>
      </div>
    </div>
  );
};

export default MainDetail;
