import React from "react";
import "./MainDetail.css";
import { useParams } from "react-router-dom";
import { useProducts } from "../../../components/Context/ProuctsContext";

const MainDetail = () => {
  const ChangePhoto = (img) => {
    document.getElementById("bigImg").src = img;
  };

  const { id } = useParams();
  const { products } = useProducts();

  let filter = products.filter((a) => a._id === id);

  return (
    <div className="MainDetail">
      {filter.map((prod, id) => (
        <div key={id} className="MainDetail-all d-flex">
          <div className="MainDetail-left col-lg-6">
            <div className="MainDetail-left-left-box">
              {prod.img.map((img, id) => (
                <div key={id} className="MainDetail-left-left-box-boxes">
                  <img
                    onClick={() => ChangePhoto(img)}
                    id="miniImg"
                    src={img}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              ))}
            </div>

            <div className="MainDetail-left-right">
              <img id="bigImg" src={prod.img} alt="" />
            </div>
          </div>
          <div className="MainDetail-right col-lg-6"></div>
        </div>
      ))}
    </div>
  );
};

export default MainDetail;
