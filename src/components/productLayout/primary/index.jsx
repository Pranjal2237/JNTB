import React from "react";
import "./style.css";
import ProductCard from "../../productCard";

const Primary = ({ picture, heading, paragraph, contentArray }) => {
  return (
    <div className="primary">
      <div className="primary-image">
        <img src={picture} alt="image" />
      </div>
      <div className="primary-content page-padding">
        <h1>{heading}</h1>
        {paragraph && <p>{paragraph}</p>}
        <div className="primary__product-container">
          {contentArray.map(({ heading, paragraph, picture }, index) => (
            <ProductCard
              heading={heading}
              picture={picture}
              paragraph={paragraph}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Primary;
