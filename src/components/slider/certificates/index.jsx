import React from 'react'
import './style.css'
import Slider from "react-slick";
import { certificates } from '../../../constants';

const CertificateSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
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
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className="slider-container certificate-container">
      <Slider {...settings}>
        {
            certificates.map(({image,name})=>(
                <div className='certificate-box'>
                    <img src={image} />
                    <p>{name}</p>
                </div>
            ))
        }
      </Slider>
    </div>
  )
}

export default CertificateSlider
