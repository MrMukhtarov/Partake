import React from "react";
import "./AboutStory.css";

const AboutStory = () => {
  return (
    <div className="aboutStory">
      <h1 className="aboutStoryh1">Our Story</h1>
      <div className="all">
        <div className="box d-flex">
          <div className="left col-lg-6 col-12">
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Holding_Hands_About_Us_526x350_d9b9fed9-c347-45e1-aef1-4cdf7ad7e8b9.png?v=1641971994w"
              alt="about"
            />
          </div>
          <div className="right col-lg-6 col-12">
            <h2>Championing Food Inclusivity</h2>
            <p>
              Created in 2016 by Founder and CEO Denise Woodard, when her
              daughter was diagnosed with multiple food allergies, Partake
              exists to offer a selection of delicious, allergy-friendly foods
              that those with and without food restrictions can enjoy and share
              with confidence. All offerings are certified gluten-free, non-GMO,
              vegan and are free of the top 9 allergens (wheat, tree nuts,
              peanuts, milk, eggs, soy, fish, sesame and shellfish).
            </p>
          </div>
        </div>
        <div className="box d-flex">
          <div className="left col-lg-6">
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Knife_Fork_About_Us_526x350_f58f8993-dd95-4cbd-a323-91bb8313cee8.png?v=1641971517w"
              alt="about"
            />
          </div>
          <div className="right col-lg-6">
            <h2>Fighting Food Insecurity</h2>
            <p>
              Food allergies affect 1 in 13 children across the country, and
              (according to foodallergy.org) Black children are at a
              significantly higher risk of developing these allergies.
              Passionate about getting safe food into the hands of food insecure
              families, Partake partners with organizations like No Kid Hungry
              to provide access to the food, education and advocacy these
              families deserve.
            </p>
          </div>
        </div>
        <div className="box d-flex">
          <div className="left col-lg-6">
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Opening_Door_About_Us_526x350_bb04234d-ea55-4169-9fb3-161a6e38664a.png?v=1641971734w"
              alt="about"
            />
          </div>
          <div className="right col-lg-6">
            <h2>Opening Doors for HBCU Students</h2>
            <p>
              As a Black & Asian American woman, Denise is passionate about
              raising awareness of Black and female entrepreneurship and
              increasing opportunities for underrepresented people seeking
              careers in the food and beverage industry. In 2020, Denise founded
              Black Futures in Food & Beverage, an annual fellowship program
              that mentors HBCU students and helps them secure internships and
              jobs at the program’s end.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStory;
