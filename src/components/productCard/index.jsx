import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const ProductCard = ({heading,picture,link}) => {
  return (
    <div className="card">
      <div className="card-content">
        <Link to={link} className="card-image">
        <img src={picture} alt="card__image" />
        </Link>
      <h3 className="card-heading">{heading}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
