import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'
import { gallarySlider } from "../../../constants";

function GallarySlider() {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container page-padding">
      <Slider {...settings}>
        {gallarySlider.map((item,index)=>(
            <div className="slider-item">
                <img src={item} alt="image" style={{objectFit:'fill',height:'100%'}} />
            </div>
        ))}
      </Slider>
    </div>
  );
}

export default GallarySlider;
