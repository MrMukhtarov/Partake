import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BestSellerContext } from "./components/Context/BestSellersContext";
import { LogoContext } from "./components/Context/LogoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BestSellerContext>
      <LogoContext>
        <App />
      </LogoContext>
    </BestSellerContext>
  </React.StrictMode>
);
