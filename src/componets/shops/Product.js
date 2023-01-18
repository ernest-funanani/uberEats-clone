import React, { useContext } from "react";
import Header from "../layouts/Header";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./Product.css";
import ShoppingContext from "../context/shopping/shoppingContext";

const Product = (id, image, title, details, price) => {
  const shoppingContext = useContext(ShoppingContext);
  const { addToCart } = shoppingContext;
  const addToCartHandler = () => {
    addToCart({ item: { id, image, title, details, price } });
  };
  return (
    <div>
      <Header />
      <div className="product-det">
        <div className="product-left">
          <div className="prod-left-top">
            <ArrowBackIcon />
            <h4>Back to KFC, Maredale</h4>
          </div>
          <img src={image} />
        </div>
        <div className="product-right">
          <h1>{title}</h1>
          <p className="product_price">
            <small>R</small>
            <strong>{price}</strong>
          </p>
          <p>{details}</p>
          <div className="flavoured">
            <h4>Drink Flavour</h4>
            <p>Required</p>
          </div>
          <div>
            <div>
              <p>Coke zero</p>
              <input type="radio" />
            </div>
            <p>R 13.00</p>
          </div>
          <div className="flavoured">
            <h6>Drink Flavour</h6>
            <p>Required</p>
          </div>
          <button className="product_button" onClick={addToCartHandler}>
            Add 1 to orderꞏR87.90
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
