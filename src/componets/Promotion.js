import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Promo from "../assets/promo.jpg";
import prom1 from "../assets/promo.jpg";
import Pasta from "../assets/pasta.jpg";
import Home from "../assets/home.jpg";
import "./Promotion.css";

class Promotion extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 6000,
      cssEase: "linear",
    };
    return (
      <div className="mainContainer">
        <Slider {...settings}>
          <div className="container">
            <img src={Pasta} />
          </div>
          <div className="container">
            <img src={Promo} />
          </div>
          <div className="container">
            <img src={prom1} />
          </div>
          <div className="container">
            <img src={Home} />
          </div>
          <div className="container">
            <img src={Promo} />
          </div>
          <div className="container">
            <img src={Pasta} />
          </div>
        </Slider>
      </div>
    );
  }
}
export default Promotion;
