import React from "react";
import "./style.css";
import ProductCard from "../../productCard";
import { Link } from "react-router-dom";


const Primary = ({ picture, heading, paragraph, contentArray,product }) => {
  return (
    <div className="primary">
      <div className="primary-image">
        <img src={picture} alt="image" />
      </div>
      <div className="primary-content page-padding">
        <h1>{heading}</h1>
        {paragraph && <p>{paragraph}</p>}
        <div className="primary__product-container">
          {contentArray.map(({ heading, picture }, index) => {
            const headingarr=heading.split('/');
            const paramsheading=headingarr[0].trim(" ");
            return (
            <ProductCard
              heading={heading}
              picture={picture}
              link={`/products/${product}/${paramsheading}`}
            />
            )
          }
          )}
        </div>
      </div>
    </div>
  );
};

export default Primary;
