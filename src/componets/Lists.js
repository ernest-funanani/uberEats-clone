import React from "react";
import Delivery from "./Delivery/Delivery";
import Promotion from "./Promotion";
import "./Lists.css";
import Header from "./layouts/Header";

function Lists() {
  return (
    <div className="full-list">
      <Header />
      <div className="res-lists">
        <div className="res-list">
          <img
            src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/deals.png"
            alt=""
          />
          <p>Deals</p>
        </div>
        <div className="res-list">
          <img
            src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/uber_grocery.png"
            alt=""
          />
          <p>Grocery</p>
        </div>
        <div className="res-list">
          <img
            src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/convenience.png"
            alt=""
          />
          <p>Convenience</p>
        </div>
        <div className="res-list">
          <img
            src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/alcohol.png"
            alt=""
          />
          <p>Alcohol</p>
        </div>
        <div className="res-list">
          <img
            src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/pharmacy-v2.png"
            alt=""
          />
          <p>Phamarcy</p>
        </div>
        <div className="res-list">
          <img
            src="https://cn-geo1.uber.com/static/mobile-content/eats/specialy_transparent_background.png"
            alt=""
          />
          <p>Speciality</p>
        </div>
        <div className="res-list">
          <img
            src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/pet_supplies.jpg"
            alt=""
          />
          <p>Pet supplies</p>
        </div>
        <div className="res-list">
          <img
            src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/retail-v2.png"
            alt=""
          />
          <p>Retail</p>
        </div>
        <div className="res-list">
          <img
            src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/top_eats.png"
            alt=""
          />
          <p>Highest Rating</p>
        </div>
        <div className="res-list">
          <img
            src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/pizza.png"
            alt=""
          />
          <p>Pizza</p>
        </div>
        <div className="res-list">
          <img
            src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/chinese.png"
            alt=""
          />
          <p>Chinese</p>
        </div>
        <div className="res-list">
          <img
            src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/asian.png"
            alt=""
          />
          <p>Asian</p>
        </div>
        <div className="res-list">
          <img
            src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/sushi.png"
            alt=""
          />
          <p>Sushi</p>
        </div>
      </div>
      <Promotion />
      <Delivery />
    </div>
  );
}

export default Lists;
