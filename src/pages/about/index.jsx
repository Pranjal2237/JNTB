import React from "react";
import "./style.css";
import { about } from "../../assets";

const About = () => {
  return (
    <main style={{ marginBottom: "2.5rem", overflow: "hidden" }}>
      <div className="about-image">
        <img src={about} alt="about" />
      </div>
      <div className="about-content page-padding">
        <h3>About us</h3>
        <p>
        Welcome to JNTB EXPORT IMPORT, your trusted partner for exporting premium Indian spices and food products worldwide. Certified by both the SPICES BOARD OF INDIA and the AGRICULTURAL AND PROCESSED FOOD PRODUCTS EXPORT DEVELOPMENT AUTHORITY, we ensure that our products meet the highest standards of quality and safety.
        </p>
        <p>
        At JNTB EXPORT IMPORT, we take pride in our commitment to excellence and efficiency in the spice business. Our state-of-the-art facilities and cutting-edge technologies allow us to sterilize spices and control micro-contamination to meet required levels, guaranteeing the utmost quality and freshness.
        </p>
        <p>
        From spices, honey, herbs, and dry fruits to millets and fresh fruits, we offer a diverse range of products all under one roof. Our dedication to perfection is reflected in the incredible quality, extraordinary taste, and rich flavor of our food products, which have delighted customers worldwide.

        </p>
        <p>
        Driven by a passion for sustainable development, we strive to meet customer needs while ensuring the confidence and satisfaction of our buyers. Our mission is not just about making profits but about providing complete satisfaction to our customers through cost-effective solutions and superior products.
        </p>
        <p>
        Thanks to our efficient and punctual services, we distinguish ourselves as the most reliable business partner in the competitive domain of import and export. As certified exporters in India, we guarantee that our spices and agro-based products conform to international standards, both in terms of physical and microbiological parameters.

        </p>
        <p>
          Our organization strives to achieve the confidence of our buyers, by
          providing them the quality products at ‘cost-benefit’ basis. Our
          policy is to get complete satisfaction of customers and not merely
          make profits in import and export business in Delhi/NCR.
        </p>
        <p>
        At JNTB EXPORT IMPORT, serving our customers in the best possible manner is not just a motto but a commitment we uphold in every aspect of our business. Join us in experiencing the perfection and reliability that define our brand.
        </p>
      </div>
    </main>
  );
};

export default About;
