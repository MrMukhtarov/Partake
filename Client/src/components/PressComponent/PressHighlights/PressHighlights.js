import React from "react";
import { NavLink } from "react-router-dom";
import "./PressHighlights.css";

const PressHighlights = () => {
  return (
    <div className="PressHighlights">
      <h1 className="pressHiglightsHeader">Highlights</h1>
      <div className="PressHighlights-all">
        <NavLink to="/" className="PressHighlights-box">
          <div className="PressHighlightsboxHead text-center">Amazon News</div>
          <div className="PressHighlights-box-text">
            <h3>
              Celebrating a record-breaking holiday season for Amazon, with
              customers purchasing more items than ever before from our selling
              partners
            </h3>
            <div className="PressHighligts-box-date">December 29, 2022</div>
          </div>
        </NavLink>
        {/* ------ */}
        <NavLink to="/" className="PressHighlights-box">
          <div className="PressHighlightsboxHead">Kitchen</div>
          <div className="PressHighlights-box-text">
            <h3>
              I Have Celiac Disease, and These Are 14 of My Favorite Gluten-Free
              Finds of 2022
            </h3>
            <div className="PressHighligts-box-date">December 15, 2022</div>
          </div>
        </NavLink>
        {/* ------ */}
        <NavLink to="/" className="PressHighlights-box">
          <div className="PressHighlightsboxHead">Delish</div>
          <div className="PressHighlights-box-text">
            <h3>This Black-Owned Vegan Snack Brand Lives Up To The Hype</h3>
            <div className="PressHighligts-box-date">November 11, 2022</div>
          </div>
        </NavLink>
        {/* ------ */}
        <NavLink
          to="https://techcrunch.com/2022/10/04/partake-foods-allergy-friendly-series-b/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAANNWQCELV621rQiUhsSNUYBTT8mHoFpbwG1jFdNLWywhdmJeLMlveOkjNdAu9wX9WDG1pzZ8rdhOLINvl-FtzeZL4ZjWgHRqUpLlCQ-SzqGq7EqUtemz9-Uj-pKBo2K-W0asl4nLoZWhb1hVKC4H6RFFPm1OdtCT-iSHiL8r5seI"
          target="_blank"
          className="PressHighlights-box"
        >
          <div className="PressHighlightsboxHead">TechCrunch</div>
          <div className="PressHighlights-box-text">
            <h3>
              Partake Foods whips up new allergy-friendly products following new
              cash infusion
            </h3>
            <div className="PressHighligts-box-date">October 4, 2022</div>
          </div>
        </NavLink>
        {/* ------ */}
        <NavLink
          to="https://www.inc.com/xintian-tina-wang/black-business.html"
          target="_blank"
          className="PressHighlights-box"
        >
          <div className="PressHighlightsboxHead">Inc.</div>
          <div className="PressHighlights-box-text">
            <h3>
              How to Expand Opportunities for Underrepresented
              EntrepreneursFounders Denise Woodard and Ryan Williams talk about
              advancing economic empowerment
            </h3>
            <div className="PressHighligts-box-date">August 25, 2022</div>
          </div>
        </NavLink>
        {/* ------ */}
        <NavLink
          to="https://www.dwell.com/article/partake-denise-woodard-kitchen-baking-favorites-1694dab5"
          target="_blank"
          className="PressHighlights-box"
        >
          <div className="PressHighlightsboxHead">Dwell</div>
          <div className="PressHighlights-box-text">
            <h3>
              8 Kitchen Staples That Partake Founder Denise Woodard Swears By
            </h3>
            <div className="PressHighligts-box-date">August 8, 2022</div>
          </div>
        </NavLink>
        {/* ------ */}
        <NavLink
          to="https://edition.cnn.com/videos/tv/2022/03/21/taking-care-of-business-partake-foods-denise-woodard.cnn"
          target="_blank"
          className="PressHighlights-box"
        >
          <div className="PressHighlightsboxHead">CNN</div>
          <div className="PressHighlights-box-text">
            <h3>One mom's mission to make safe snacks for all</h3>
            <div className="PressHighligts-box-date">March 21, 2022</div>
          </div>
        </NavLink>
        {/* ------ */}
        <NavLink
          to="https://www.cbsnews.com/news/partake-foods-cookies-allergies/"
          target="_blank"
          className="PressHighlights-box"
        >
          <div className="PressHighlightsboxHead">CBS News</div>
          <div className="PressHighlights-box-text">
            <h3>
              A mother wanted her daughter to have allergy-friendly cookies. She
              was rejected by 86 investors before finding success
            </h3>
            <div className="PressHighligts-box-date">February 14, 2022</div>
          </div>
        </NavLink>
        {/* ------ */}
        <NavLink
          to="https://www.forbes.com/sites/chloesorvino/2021/07/22/partake-foods-hbcu-fellows-program-is-a-model-for-the-food-industry/?sh=189db0b92a4a"
          target="_blank"
          className="PressHighlights-box"
        >
          <div className="PressHighlightsboxHead">Forbes</div>
          <div className="PressHighlights-box-text">
            <h3>
              Partake Foods’ HBCU Fellows Program Is A Model For The Food
              Industry
            </h3>
            <div className="PressHighligts-box-date">July 22, 2021</div>
          </div>
        </NavLink>
        {/* ------ */}
      </div>
    </div>
  );
};

export default PressHighlights;
