import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BestSellerContext } from "./components/Context/BestSellersContext";
import { LogoContext } from "./components/Context/LogoContext";
import { CrunchyContext } from "./components/Context/CrunchyContext";
import { SoftBakedContext } from "./components/Context/SoftBakedContext";
import { BakingMixesContext } from "./components/Context/BakingMixesContext";
import { BreakFastMixesContext } from "./components/Context/BreakfastMixesContext";
import { VarietyContext } from "./components/Context/VarietyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BestSellerContext>
      <LogoContext>
        <CrunchyContext>
          <SoftBakedContext>
            <BakingMixesContext>
              <BreakFastMixesContext>
                <VarietyContext>
                  <App />
                </VarietyContext>
              </BreakFastMixesContext>
            </BakingMixesContext>
          </SoftBakedContext>
        </CrunchyContext>
      </LogoContext>
    </BestSellerContext>
  </React.StrictMode>
);
