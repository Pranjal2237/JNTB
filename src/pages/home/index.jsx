import React from "react";
import "./style.css";
import { mouce, quality, why, aboutLogo, facebook, twitter, slider2,instagram} from "../../assets";
import { Link} from "react-router-dom";
import { productArr } from "../../constants";
import { Homecard } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import GallarySlider from "../../components/slider/gallary";
import Banner from "../../components/slider/banner";

const Home = ({setActiveTitle}) => {
  return (
    <div className="home">
      <div className="home-banner">
        <img src={slider2} alt="banner" />
        <Banner />
      </div>
      <div className="page-padding home-description">
        <div className="description-item">
          <div className="description-image">
            <img src={quality} alt="quality" />
          </div>
          <div className="description-content">
            <h3>Quality</h3>
            <p>
            Our product line boasts top-notch quality that perfectly aligns with our clients' needs and complies with international standards.
            </p>
          </div>
        </div>
        <div className="description-item">
          <div className="description-image">
            <img src={why} alt="why" />
          </div>
          <div className="description-content">
            <h3>Why us</h3>
            <p>
            Our leadership in the export and import sector stems from our dedication to cutting-edge standards, unwavering service reliability, and a relentless pursuit of excellence.
            </p>
          </div>
        </div>
        <Link to="/enquiry">
          <div onClick={()=>{setActiveTitle('enquiry')}}>
            <div className="description-image">
              <img src={mouce} alt="mouce" />
            </div>
            <h2 style={{fontSize:'35px'}}>Quick Enquiry</h2>
          </div>
        </Link>
      </div>
      <div className="about-section page-padding">
        <h3>About Company</h3>
        <div className="about-container">
          <div className="about-image">
            <img src={aboutLogo} alt="image" />
          </div>
          <div className="home_about-content">
            <h4>
              JNTB EXPORT IMPORT is a leading export company, established in the year
              2023. The organization has been associated in the field of exports
              ever since;
            </h4>
            <p>
              Exporting Indian spices, nuts, vegetables, handicrafts and coir
              based products. Having ventured into the activity of export and
              import, the organization has emerged as one of the key players in
              exporting agro based commodities based on the requirement of
              clients. Our company executes services at par with international
              standards. We deal in distributing agro based products based on
              ‘Best value for money” basis and are looking to expand our
              servicing areas. We are one of the most recognized export
              companies to export Indian food products all over the globe. We
              are servicing for the spices, herbs, dry fruits, natural honey,
              and handicraft care clients who require import and export business
              in India.
            </p>
            <Link to="/about">
              <div onClick={()=>{setActiveTitle('about')}}>Read More</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="product-section">
        <h3>Our Product</h3>
        <div className="page-padding container">
          {productArr.map(({ image, paragraph, heading, link }) => (
            <Homecard
              image={image}
              paragraph={paragraph}
              link={link}
              heading={heading}
            />
          ))}
        </div>
      </div>
      <div className="gallary">
        <h3>Gallary</h3>
        <GallarySlider />
      </div>
      <div className="home-footer page-padding">
        <div className="footer-container">
          <div className="footer-item">
            <FontAwesomeIcon icon={faPhone} style={{fontSize:'20px'}} />
            <p>+91 9289 409329</p>
          </div>
        <div className="footer-item">
          <FontAwesomeIcon icon={faEnvelope} style={{fontSize:'24px'}} />
          <a href="mailto:info@jntbexim.com">info@jntbexim.com</a>
        </div>
        </div>
        <h3>FOLLOW US</h3>
        <div className="home_footer-media">
        <a><img src={facebook} alt="image"/></a>
        <a><img src={instagram} alt="image" /></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
