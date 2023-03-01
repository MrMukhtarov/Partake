import React, { useEffect, useRef, useState } from "react";
import "./IngredientsPicture.css";

const IngredientsPicture = () => {
  const [gingers, setGiner] = useState("none");
  const [vanilla, setVanilla] = useState("none");
  const [oats, setOats] = useState("none");
  const [flax, setFlax] = useState("none");
  const [rosemary, setRosemary] = useState("none");
  const [cinnamon, setCinnamon] = useState("none");
  const [oatFlour, setOatFlour] = useState("none");
  const [chocolate, setChocolate] = useState("none");
  const [cessava, setCessava] = useState("none");
  const [sugar, setSugar] = useState("none");
  const [brown, setBrown] = useState("none");
  const [buckwheat, setBuckWheat] = useState("none");
  const [icon, setIcon] = useState("plus");
  const [icon2, setIcon2] = useState("plus");
  const [icon3, setIcon3] = useState("plus");
  const [icon4, setIcon4] = useState("plus");
  const [icon5, setIcon5] = useState("plus");
  const [icon6, setIcon6] = useState("plus");
  const [icon7, setIcon7] = useState("plus");
  const [icon8, setIcon8] = useState("plus");
  const [icon9, setIcon9] = useState("plus");
  const [icon10, setIcon10] = useState("plus");
  const [icon11, setIcon11] = useState("plus");
  const [icon12, setIcon12] = useState("plus");

  // GINGER
  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (e) => {
    if (!refOne.current.contains(e.target)) {
      setGiner("none");
      setIcon("plus");
    }
  };

  const ginerInfo = () => {
    if (gingers === "none") {
      setGiner("block");
      setIcon("x");
    } else {
      setGiner("none");
      setIcon("plus");
    }
  };
  // GINGER
  // --------
  // VANILLA
  const refTwo = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside2, true);
  }, []);

  const handleClickOutside2 = (e) => {
    if (!refTwo.current.contains(e.target)) {
      setVanilla("none");
      setIcon2("plus");
    }
  };

  const vanillaInfo = () => {
    if (vanilla === "none") {
      setVanilla("block");
      setIcon2("x");
    } else {
      setVanilla("none");
      setIcon2("plus");
    }
  };
  // VANILLA
  // -------
  // OATS
  const refThree = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside3, true);
  }, []);

  const handleClickOutside3 = (e) => {
    if (!refThree.current.contains(e.target)) {
      setOats("none");
      setIcon3("plus");
    }
  };

  const OatsInfo = () => {
    if (oats === "none") {
      setOats("block");
      setIcon3("x");
    } else {
      setOats("none");
      setIcon3("plus");
    }
  };
  // OATS
  // -------
  //FLAX
  const refFour = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside4, true);
  }, []);

  const handleClickOutside4 = (e) => {
    if (!refFour.current.contains(e.target)) {
      setFlax("none");
      setIcon4("plus");
    }
  };

  const FlaxInfo = () => {
    if (flax === "none") {
      setFlax("block");
      setIcon4("x");
    } else {
      setFlax("none");
      setIcon4("plus");
    }
  };
  //FLAX
  // -------
  //ROSEMARY
  const refFive = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside5, true);
  }, []);

  const handleClickOutside5 = (e) => {
    if (!refFive.current.contains(e.target)) {
      setRosemary("none");
      setIcon5("plus");
    }
  };

  const RosemaryInfo = () => {
    if (rosemary === "none") {
      setRosemary("block");
      setIcon5("x");
    } else {
      setRosemary("none");
      setIcon5("plus");
    }
  };
  //ROSEMARY
  // -------
  //CINNAMON
  const refSix = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside6, true);
  }, []);

  const handleClickOutside6 = (e) => {
    if (!refSix.current.contains(e.target)) {
      setCinnamon("none");
      setIcon6("plus");
    }
  };

  const CinnamonInfo = () => {
    if (cinnamon === "none") {
      setCinnamon("block");
      setIcon6("x");
    } else {
      setCinnamon("none");
      setIcon6("plus");
    }
  };
  //CINNAMON
  //OAT FLOUR
  const refSeven = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside7, true);
  }, []);

  const handleClickOutside7 = (e) => {
    if (!refSeven.current.contains(e.target)) {
      setOatFlour("none");
      setIcon7("plus");
    }
  };

  const OatFlourInfo = () => {
    if (oatFlour === "none") {
      setOatFlour("block");
      setIcon7("x");
    } else {
      setOatFlour("none");
      setIcon7("plus");
    }
  };
  //OAT FLOUR
  //CHOCOLATE
  const refEight = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside8, true);
  }, []);

  const handleClickOutside8 = (e) => {
    if (!refEight.current.contains(e.target)) {
      setChocolate("none");
      setIcon8("plus");
    }
  };

  const ChocolateInfo = () => {
    if (chocolate === "none") {
      setChocolate("block");
      setIcon8("x");
    } else {
      setChocolate("none");
      setIcon8("plus");
    }
  };
  //CHOCOLATE
  //CESSAVA
  const refNine = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside9, true);
  }, []);

  const handleClickOutside9 = (e) => {
    if (!refNine.current.contains(e.target)) {
      setCessava("none");
      setIcon9("plus");
    }
  };

  const CessavaInfo = () => {
    if (cessava === "none") {
      setCessava("block");
      setIcon9("x");
    } else {
      setCessava("none");
      setIcon9("plus");
    }
  };
  //CESSAVA
  //SUGAR
  const refTen = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside10, true);
  }, []);

  const handleClickOutside10 = (e) => {
    if (!refTen.current.contains(e.target)) {
      setSugar("none");
      setIcon10("plus");
    }
  };

  const SugarInfo = () => {
    if (sugar === "none") {
      setSugar("block");
      setIcon10("x");
    } else {
      setSugar("none");
      setIcon10("plus");
    }
  };
  //SUGAR
  //BROWN
  const refEleven = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside11, true);
  }, []);

  const handleClickOutside11 = (e) => {
    if (!refEleven.current.contains(e.target)) {
      setBrown("none");
      setIcon11("plus");
    }
  };

  const BrownInfo = () => {
    if (brown === "none") {
      setBrown("block");
      setIcon11("x");
    } else {
      setBrown("none");
      setIcon11("plus");
    }
  };
  //BROWN
  //BUCKWHEAT
  const refTwelwe = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside12, true);
  }, []);

  const handleClickOutside12 = (e) => {
    if (!refTwelwe.current.contains(e.target)) {
      setBuckWheat("none");
      setIcon12("plus");
    }
  };

  const BuckWheatInfo = () => {
    if (buckwheat === "none") {
      setBuckWheat("block");
      setIcon12("x");
    } else {
      setBuckWheat("none");
      setIcon12("plus");
    }
  };
  //BUCKWHEAT
  return (
    <div className="IngredientsPicture">
      <div className="all col-12">
        <div className="right col-12 d-flex">
          <div
            ref={refOne}
            id="ginerB"
            onClick={ginerInfo}
            className={`box gingerBox col-lg-2 col-3`}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/HP-ginger_f08ff2d2-b048-47de-85cc-f427b88c2984.png?v=1640590204"
              alt="img"
            />
            <i id="righti" className={`fa-solid fa-plus plus ${icon}`}></i>
            <div id="gingerDiv" className={`ginger ${gingers}`}>
              <div className="IngredientsPicture-box-info">
                <h5>Ginger</h5>
                <div>Origin U.S., Brazil, France, Germany</div>
                <hr className="hr" />
                <p>
                  A commonly used herbal medicine, ginger’s bioactive compound
                  gingerol is known for its anti-inflammatory and antioxidant
                  effects.
                </p>
              </div>
            </div>
          </div>
          {/* ------ */}
          <div
            className="box col-lg-2 vanillaBox col-3"
            ref={refTwo}
            onClick={vanillaInfo}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/HP-vanilla_21d36f6a-863f-42cd-96b7-0a0b2c0c9125_750x.png?v=1642486572"
              alt="img"
            />
            <i id="righti2" className={`fa-solid fa-plus plus ${icon2}`}></i>
            <div id="vanillaDiv" className={`vanilla ${vanilla}`}>
              <div className="IngredientsPicture-box-info">
                <h5>Vanilla</h5>
                <div>Origin Indonesia</div>
                <hr className="hr" />
                <p>
                  The vanilla bean is known for its fragrance and flavor, but it
                  is also used to make medicine.
                </p>
              </div>
            </div>
          </div>
          {/* ------ */}
          <div
            className="box oatsBox col-lg-2 col-3"
            onClick={OatsInfo}
            ref={refThree}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/HP-oats_240x_bf7129c1-26c5-4357-9778-53db870d9308.png?v=1640667412"
              alt="img"
            />
            <i className={`fa-solid fa-plus plus ${icon3}`}></i>
            <div id="oatsDiv" className={`oats ${oats}`}>
              <div className="IngredientsPicture-box-info">
                <h5>Quick Rolled Oats</h5>
                <div>Origin Canada</div>
                <hr className="hr" />
                <p>Sustainably grown and harvested from non-GMO seed.</p>
              </div>
            </div>
          </div>
          {/* ------ */}
          <div
            className="box col-lg-2 flaxBox col-3"
            onClick={FlaxInfo}
            ref={refFour}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/HP-Flax_240x_aff2738b-af33-4ee1-99de-f47adb1bc9b8.png?v=1640667941"
              alt="img"
            />
            <i className={`fa-solid fa-plus plus ${icon4}`}></i>
            <div id="flaxDiv" className={`flaxs ${flax}`}>
              <div className="IngredientsPicture-box-info">
                <h5>Flax</h5>
                <div>Origin Canada</div>
                <hr className="hr" />
                <p>
                  These mighty seeds are packed with numerous nutrients, omega-3
                  fatty acids and fiber.
                </p>
              </div>
            </div>
          </div>
          {/* ------- */}
          <div
            className="box col-lg-2 rosemaryBox col-3"
            onClick={RosemaryInfo}
            ref={refFive}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/rosemary_c8ac195c-64d6-4964-987d-abf6337bd71c_750x.png?v=1642487662"
              alt="img"
            />
            <i className={`fa-solid fa-plus plus ${icon5}`}></i>
            <div id="rosemaryDiv" className={`rosemary ${rosemary}`}>
              <div className="IngredientsPicture-box-info">
                <h5>Rosemary</h5>
                <div>Origin U.S.</div>
                <hr className="hr" />
                <p>
                  With a very distinct flavor, rosemary is full of antioxidants
                  and anti-inflammatory compounds.
                </p>
              </div>
            </div>
          </div>
          {/* ------- */}
          <div
            className="box col-lg-2 cinnamonBox col-3"
            onClick={CinnamonInfo}
            ref={refSix}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/HP-cinammon_240x_4e7dcc87-d964-487d-8697-69dafed1e5ca.png?v=1640667337"
              alt="img"
            />
            <i className={`fa-solid fa-plus plus ${icon6}`}></i>
            <div id="cinnamonDiv" className={`cinnamon ${cinnamon}`}>
              <div className="IngredientsPicture-box-info">
                <h5>Cinnamon</h5>
                <div>Origin Indonesia</div>
                <hr className="hr" />
                <p>
                  Traced back to Ancient Egypt, Cinnamon has been used for
                  thousands of years as medicine and is now the 2nd most
                  commonly used spice in the U.S.
                </p>
              </div>
            </div>
          </div>
          {/* ====== */}
          <div
            className="box col-lg-2 oatFlourBox col-3"
            onClick={OatFlourInfo}
            ref={refSeven}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/oat_flour_240x.png?v=1614334423"
              alt="img"
            />
            <i className={`fa-solid fa-plus plus ${icon7}`}></i>
            <div id="oatFlourDiv" className={`oatflour ${oatFlour}`}>
              <div className="IngredientsPicture-box-info">
                <h5>Oat Flour</h5>
                <div>Origin Canada</div>
                <hr className="hr" />
                <p>
                  Sustainably grown and harvested from non-GMO seed, our oat
                  ingredients are gluten-free.
                </p>
              </div>
            </div>
          </div>
          {/* ======= */}
          {/* ====== */}
          <div
            className="box col-lg-2 ChocolateBox col-3"
            onClick={ChocolateInfo}
            ref={refEight}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/chocolate_240x.png?v=1614334423"
              alt="img"
            />
            <i className={`fa-solid fa-plus plus ${icon8}`}></i>
            <div id="ChocolateDiv" className={`chocolate ${chocolate}`}>
              <div className="IngredientsPicture-box-info">
                <h5>Chocolate</h5>
                <div>Origin U.S., Brazil, France, Germany</div>
                <hr className="hr" />
                <p>
                  While known mostly as a sweet treat, the cocoa in chocolate
                  offers nutritional benefits from minerals including iron,
                  magnesium and zinc.
                </p>
              </div>
            </div>
          </div>
          {/* ======= */}
          {/* ====== */}
          <div
            className="box col-lg-2 CessavaBox col-3"
            onClick={CessavaInfo}
            ref={refNine}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/cassava_flour_240x.png?v=1614334423"
              alt="img"
            />
            <i className={`fa-solid fa-plus plus ${icon9}`}></i>
            <div id="CessavaDiv" className={`cessava ${cessava}`}>
              <div className="IngredientsPicture-box-info">
                <h5>Cassava Flour</h5>
                <div>Origin Brazil</div>
                <hr className="hr" />
                <p>
                  This grain-free, naturally gluten-free flour is made from the
                  whole cassava root that’s been peeled, dried and ground.
                </p>
              </div>
            </div>
          </div>
          {/* ======= */}
          {/* ====== */}
          <div
            className="box col-lg-2 SugarBox col-3"
            onClick={SugarInfo}
            ref={refTen}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/organic_cane_sugar_240x.png?v=1614334423"
              alt="img"
            />
            <i className={`fa-solid fa-plus plus ${icon10}`}></i>
            <div id="SugarDiv" className={`sugar ${sugar}`}>
              <div className="IngredientsPicture-box-info">
                <h5>Organic Fair Trade Cane Sugar</h5>
                <div>Origin Brazil</div>
                <hr className="hr" />
                <p>
                  Unrefined, pesticide-free and minimally processed. Our fair
                  trade organic cane sugar retains many of the nutrients found
                  in cane juice.
                </p>
              </div>
            </div>
          </div>
          {/* ======= */}
          {/* ====== */}
          <div
            className="box col-lg-2 BrownBox col-3"
            onClick={BrownInfo}
            ref={refEleven}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/brown_sugar_240x.png?v=1614334423"
              alt="img"
            />
            <i className={`fa-solid fa-plus plus ${icon11}`}></i>
            <div id="BrownDiv" className={`brown ${brown}`}>
              <div className="IngredientsPicture-box-info">
                <h5>Organic Brown Sugar</h5>
                <div>Origin U.S.</div>
                <hr className="hr" />
                <p>
                  With the inclusion of rich molasses, our organic brown sugar
                  is unrefined, pesticide-free and minimally processed.
                </p>
              </div>
            </div>
          </div>
          {/* ======= */}
          {/* ====== */}
          <div
            className="box col-lg-2 BuckwheatBox col-3"
            onClick={BuckWheatInfo}
            ref={refTwelwe}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/HP-Buckwheat_240x.png?v=1614334423"
              alt="img"
            />
            <i className={`fa-solid fa-plus plus ${icon12}`}></i>
            <div id="BuckWheatDiv" className={`buckwheat ${buckwheat}`}>
              <div className="IngredientsPicture-box-info">
                <h5>Organic Buckwheat</h5>
                <div style={{color : '#005099'}}>Origin U.S.</div>
                <hr className="hr" />
                <p>
                  This nutritious, nutty seed is packed with insoluble fiber.
                </p>
              </div>
            </div>
          </div>
          {/* ======= */}
        </div>
      </div>
    </div>
  );
};

export default IngredientsPicture;
