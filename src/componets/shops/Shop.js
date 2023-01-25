import React from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import StarRateIcon from "@mui/icons-material/StarRate";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="main-menu">
      <Header />
      <div className="top-section">
        <div className="top-section-icons">
          <span>
            <FavoriteBorderIcon />
          </span>
          <span>
            <MoreHorizIcon />
          </span>
        </div>
      </div>
      <div className="middle-section">
        <div className="name-store">
          <h1>KFC, Ormonde China Mall</h1>
          <div className="middle-rating">
            <StarRateIcon />
            <p>4.4(414 ratings)</p>
            <p>•</p>
            <p>American</p> <p>•</p> <p>RR</p> <p>•</p>
            <HourglassFullIcon />
            <p>•</p>
            <a href="">
              <p>More info</p>
            </a>
          </div>

          <p>Open until 9:30 PM</p>
          <p>Tap for hours, info and more</p>
        </div>
        <div className="oder-del">
          <div className="goup-odr">
            <div className="group-oder">
              <PersonAddAlt1Icon />
              <span>Group order</span>
            </div>
            <div className="group-oder">
              <EventNoteIcon />
              <span>schedule</span>
            </div>
          </div>
          <div className="pick-deliver">
            <div className="delivery=pick">
              <span>Delivery</span>
              <p> 15-20 min • R15</p>
            </div>
            <div className="delivery=pick">
              <span>Pickup</span>
              <p> 15-20 min • 3,8km</p>
            </div>
          </div>
          <div className="del-pick"></div>
        </div>
        <div>
          <div>
            <h1>NonBreakfast</h1>
            <p>9:00 AM – 9:30 PM</p>
          </div>
          <div>
            <h1>Breakfast</h1>
            <p>Wed 6:00 AM – 10:30 AM</p>
          </div>
        </div>
        <div className="main-section">
          <div className="sidebar-menu">
            <span>Promotions</span>
            <span>Buckets</span>
            <span>Family Treat</span>
            <span>Box Meals</span>
            <span>Burger</span>
            <span>Twisters</span>
            <span>Streetwise</span>
          </div>

          <div className="middle-section-menu">
            <div className="food-menu-order">
              <div className="food-menu">
                <div className="food-menu">
                  <h3>Free with R 70 purchase (add to cart)</h3>
                  <div className="menu-card">
                    <div className="food-card">
                      <AddCircleIcon
                        sx={{ fontSize: 40 }}
                        className="add-cir"
                      />
                      <div className="tooltip">
                        <span className="tooltip-text">Quickview</span>
                      </div>
                      <img
                        src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Items/Coca_Cola_Extra.jpg?v=2.28"
                        alt=""
                      />
                      <h4>Buddy Bottle 440ml</h4>
                      <p>R 19.99</p>
                      <span>Free with R 70 purchase</span>
                    </div>
                  </div>
                </div>
                <h2>Promotions</h2>
                <div className="menu-card">
                  <div className="food-card">
                    <img
                      src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Items/flb_zinger_buddy.jpg?v=2.28"
                      alt=""
                    />
                    <span>Crunchmaster Sweet </span>
                    <span>Chilli Box Meal</span>
                    <p>R 105.90</p>
                  </div>
                  <div className="food-card">
                    <img
                      src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Items/sweet_chilli_fill1.jpg?v=2.28"
                      alt=""
                    />
                    <span> Sweet Chilli Twister</span>
                    <p>R 65.90</p>
                  </div>
                  <div className="food-card">
                    <img
                      src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Items/flb_zinger_sfl.jpg?v=2.28"
                      alt=""
                    />
                    <span>Crunchmaster Peri Peri</span>
                    <span>Box Meal</span>
                    <p>R 105.90</p>
                  </div>
                  <div className="food-card">
                    <img
                      src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Items/chilli_cheese_crunch_clc.jpg?v=2.28"
                      alt=""
                    />
                    <span>Burger Meal</span>
                    <p>R 70.99</p>
                  </div>
                </div>
              </div>
              <div className="food-menu">
                <h2>Box Meals</h2>
                <div className="menu-card">
                  <Link to="/product" className="food-card">
                    <div>
                      <img
                        src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Items/flb_zinger_sfl.jpg?v=2.28"
                        alt=""
                      />
                      <span>Crunchmaster Peri Peri (Prego)</span>
                      <span> Box Meal</span>
                      <p>R 105.90</p>
                    </div>
                  </Link>
                  <div className="food-card">
                    <img
                      src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Items/flb_colburg_sfl.jpg?v=2.28"
                      alt=""
                    />
                    <span>Crunchmaster Dunked Box Meal</span>
                    <p>R 105-99</p>
                  </div>
                  <div className="food-card">
                    <img
                      src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Items/flb_zinger_buddy.jpg?v=2.28"
                      alt=""
                    />
                    <span>Crunchmaster Sweet Chilli Box Meal</span>
                    <p>R 105.90</p>
                  </div>
                  <div className="food-card">
                    <img
                      src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Items/allstarlunchbb.jpg?v=2.28"
                      alt=""
                    />
                    <span>Crunchmaster Sweet Chilli Box Meal</span>
                    <p>R 105.99</p>
                  </div>
                </div>
              </div>
              <div className="food-menu">
                <h2>Twisters</h2>
                <div className="menu-card">
                  <div className="food-card">
                    <img
                      src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Items/sweet_chilli_fill1.jpg?v=2.28"
                      alt=""
                    />
                    <span> Sweet Chilli Twister</span>
                    <p>R 65.90</p>
                  </div>
                  <div className="food-card">
                    <img
                      src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Items/classic_twister_fill1.jpg?v=2.28"
                      alt=""
                    />
                    <span>Clissic Twister</span>
                    <p>R 65.90</p>
                  </div>
                  <div className="food-card">
                    <img
                      src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Items/box_master_fill1.jpg?v=2.28"
                      alt=""
                    />
                    <span>Crunchmaster Dunked</span>
                    <p>R 65.90</p>
                  </div>
                  <div className="food-card">
                    <img
                      src="https://order.kfc.co.za/Content/OnlineOrderingImages/Menu/Items/box_master_fill1.jpg?v=2.28"
                      alt=""
                    />
                    <span>BoxMaster</span>
                    <p>R 68.90</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
