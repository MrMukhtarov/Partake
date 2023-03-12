import React from "react";
import "./ProdImgBox.css";

const ProdImgBox = () => {
  return (
    <div className="ProdImgBox">
      <div className="ProdImgBox-all row">
        {/* FIRST */}
        <div className="ProdImgBox-box col-lg-4 col-12">
          <img
            src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/PLP_Subscribe_n_Save_417x310_c481c46f-e8b6-4825-8708-137e985b113f.png?v=1642089155"
            alt="ProdImgBox"
            className="img-fluid"
          />
          <div className="ProdImgBox-h3">
            <h3>Subscribe & Save 10% off every order.</h3>
          </div>
        </div>
        {/* FIRST */}
        {/* SECOND */}
        <div className="ProdImgBox-box col-lg-4 col-12">
          <img
            src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Ingredients_417x310_b408830c-041e-48f2-bcc9-450d82df7c13.png?v=1642131175"
            alt="ProdImgBox"
            className="img-fluid"
          />
          <div className="ProdImgBox-h3">
            <h3 style={{ color: "white" }}>
              Real deal ingredients in every flavor.
            </h3>
          </div>
        </div>
        {/* SECOND */}
        {/* THIRD */}
        <div className="ProdImgBox-box col-lg-4 col-12">
          <img
            src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/PLP_Free_Shipping_417x310_d85070f3-76cb-4a28-af7b-5d2794f5bc5e.png?v=1642090182"
            alt="ProdImgBox"
            className="img-fluid"
          />
          <div className="ProdImgBox-h3">
            <h3>Free shipping on orders over $39.</h3>
          </div>
        </div>
        {/* THIRD */}
      </div>
    </div>
  );
};

export default ProdImgBox;
