import React from "react";
import { Carousel } from "antd";
import BannerOne from "./caroselSVG/bannerOne.jsx";
import BannerTwo from "./caroselSVG/bannerTwo.jsx";
import BannerThree from "./caroselSVG/bannerThree.jsx";
import BannerFour from "./caroselSVG/bannerFour.jsx";

const CardCarousel = () => {
  const contentStyle = {
    height: "405px",
    color: "#181818",
    lineHeight: "160px",
    textAlign: "center",
    background: "linear-gradient(20deg,#f11000,#ffffff)",
  };

  return (
    <Carousel autoplay="true" effect="fade">
      <div>
        <h3 style={contentStyle}>
          <BannerOne />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <BannerTwo />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <BannerThree />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <BannerFour />
        </h3>
      </div>
    </Carousel>
  );
};

export default CardCarousel;
