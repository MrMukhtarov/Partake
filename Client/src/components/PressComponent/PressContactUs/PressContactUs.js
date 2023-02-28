import React from "react";
import "./PressContactUs.css";

const PressContactUs = () => {
  return (
    <div className="PressContactUs">
      <h1 className="PressContactUs-h1">Contact us</h1>
      <div className="PressContactUs-all row">
        <div className="PressContactUs-left col-lg-6">
          <form className="PressContactUs-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea
              name=""
              id=""
              cols="30"
              rows="7"
              placeholder="Message"
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
        {/* -------- */}
        <div className="PressContactUs-right col-lg-6">
          <img
            className="img-fluid"
            src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Contact_desktop_02cab23e-97b4-4a9d-8a65-e7e681185a59_750x.png?v=1671819698"
            alt="press-contact"
          />
        </div>
      </div>
    </div>
  );
};

export default PressContactUs;
