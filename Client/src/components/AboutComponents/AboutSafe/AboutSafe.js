import React from "react";
import "./AboutSafe.css";
import { GiJellyBeans } from "react-icons/gi";
import { BsFillEggFill } from "react-icons/bs";
import { TbBottle } from "react-icons/tb";
import { GiCoffeeBeans } from "react-icons/gi";
import { GiCoconuts } from "react-icons/gi";
import { GiSesame } from "react-icons/gi";
import { GiWaterDrop } from "react-icons/gi";
import { AiFillGoogleCircle } from "react-icons/ai";
import { SlChemistry } from "react-icons/sl";

const AboutSafe = () => {
  return (
    <div className="aboutSafe">
      <div className="all">
        <div className="top col-lg-12 text-center">
          <h2>
            {window.location.pathname !== "/products"
              ? "The Partake Promise"
              : "Safe to Share"}
          </h2>
          <p>
            {window.location.pathname !== "/products"
              ? ' Our products give delicious peace of mind to those with dietary restrictions... and "How is this so good?" enjoyment to everyone else.'
              : "All Partake products are free of the top 9 allergens."}
          </p>
        </div>
        <div className="bottom d-flex text-center">
          <div className="box">
            <GiJellyBeans title="Group 3 1" />
            <p>Peanust</p>
          </div>
          <div className="box">
            <BsFillEggFill title="Group 3-1 1" />
            <p>Eggs</p>
          </div>
          <div className="box">
            <TbBottle title="Group 3-2 1" />
            <p>Dairy</p>
          </div>
          <div className="box">
            <GiCoffeeBeans title="Group 3-3 1" />
            <p>Soy</p>
          </div>
          <div className="box">
            <GiCoconuts title="Group 3-4 1" />
            <p>Tree Nuts</p>
          </div>
          <div className="box">
            <GiSesame title="Group 3-5 1" />
            <p>Sesame</p>
          </div>
          <div className="box">
            <GiWaterDrop title="Group 3-6 1" />
            <p>
              Artificial <br /> Flavors
            </p>
          </div>
          <div className="box">
            <AiFillGoogleCircle title="Group 3-7 1" />
            <p>GMO`s</p>
          </div>
          <div className="box">
            <SlChemistry title="Group 3-8 1" />
            <p>
              Artificial <br /> Preservatives
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSafe;
