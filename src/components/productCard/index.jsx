import React from "react";
import "./style.css";

const ProductCard = ({heading,picture}) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-image">
        <img src={picture} alt="card__image" />
        </div>
      <h3 className="card-heading">{heading}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
