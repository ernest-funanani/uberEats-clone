import React from "react";
import "./Product";

const Products = ({ src, title, price, details }) => {
  return (
    <div className="product">
      <img src={src} alt="" />
      <div className="prod-info">
        <h2>{title}</h2>
        <span>{price}</span>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default Products;
