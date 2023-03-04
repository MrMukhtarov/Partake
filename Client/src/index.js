import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BestSellerContext } from "./components/Context/BestSellersContext";
import { LogoContext } from "./components/Context/LogoContext";
import { CrunchyContext } from "./components/Context/CrunchyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BestSellerContext>
      <LogoContext>
        <CrunchyContext>
            <App />
        </CrunchyContext>
      </LogoContext>
    </BestSellerContext>
  </React.StrictMode>
);
