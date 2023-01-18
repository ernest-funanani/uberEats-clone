import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import Lists from "../Lists";
import Pickup from "../Pickup";
import "./Header.css";
import ShoppingContext from "../context/shopping/shoppingContext";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  const shoppingContext = useContext(ShoppingContext);
  const { cart } = shoppingContext;

  return (
    <div className="hello">
      <div className="left-menu">
        <span class="material-symbols-outlined">menu</span>
        <Link to="/home" className="banner-img-style">
          <img
            src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg"
            alt=""
          />
        </Link>
      </div>

      <div className="middle-menu">
        <div className="nav-select">
          <NavLink
            to="/lists"
            className="pick-up"
            activeStyle={{
              background: "white",
              width: "84px",
              alignItems: "center",
              borderRadius: "40px",
              padding: "7px",
            }}
          >
            <p>Delivery</p>
          </NavLink>
          <NavLink
            to="/pickup"
            className="pick-up"
            activeStyle={{
              background: "white",
              width: "76px",
              alignItems: "center",
              borderRadius: "40px",
              padding: "7px",
            }}
          >
            <p>PickUp</p>
          </NavLink>
        </div>
        <div className="now">
          <span class="material-symbols-outlined">search</span>
          <p>Now</p>
        </div>
      </div>

      <div className="search">
        <span class="material-symbols-outlined">search</span>
        <input
          className="input-text"
          type="text"
          placeholder="Food, drink, groceries etc"
        />
      </div>
      <div className="right-menu">
        <div className="cart">
          <ShoppingBasketIcon />
          <p>{cart?.length}</p>
          <p>Cart</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
