import React, { useState } from "react";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import KitchenIcon from "@mui/icons-material/Kitchen";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MosqueIcon from "@mui/icons-material/Mosque";

import "./Sort.css";

function Sort() {
  const [expanded, setExpanded] = useState(false);
  const [expandMore, setExpandMore] = useState(false);
  const [priceRange, setPriceRange] = useState(false);
  const [maxPrice, setMaxPrice] = useState(false);

  return (
    <div className="all-stores">
      <h1> All stores</h1>
      <div>
        <div className="sort-rating">
          <h4>Sort</h4>
          {/* expanding  and closing icons */}
          <button onClick={() => setExpanded(!expanded)}>
            {expanded ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </button>
        </div>
        {expanded && (
          <div className="btn-infoma">
            <div className="expand-more">
              <input type="radio" id="css" name="fav_language" value="CSS" />
              <p>Picked for you ( default)</p>
            </div>
            <div className="expand-more">
              <input type="radio" id="css" name="fav_language" value="CSS" />
              <p>Most popular</p>
            </div>

            <div className="expand-more">
              <input type="radio" id="css" name="fav_language" value="CSS" />
              <p>Rating</p>
            </div>
            <div className="expand-more">
              <input type="radio" id="css" name="fav_language" value="CSS" />
              <p>Delivery Time</p>
            </div>
          </div>
        )}
      </div>

      <div>
        <div className="sort-rating">
          <h6>From Uber Eats</h6>
          {/* expanding  and closing icons */}
          <button onClick={() => setExpandMore(!expandMore)}>
            {expandMore ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </button>
        </div>
        {expandMore && (
          <div>
            <div className="uber-deals">
              <div className="ubn-dls">
                <LocalOfferIcon className="uber-icons" />
                <p>Deals</p>
              </div>
              {/* Rounded switch */}
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
            <div className="uber-deals">
              <div className="ubn-dls">
                <MilitaryTechIcon className="uber-icons" />
                <p>Highest rated</p>
              </div>
              {/* Rounded switch */}
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        )}
      </div>

      <div className="sort-rating">
        <h6>Price Range</h6>
        {/* expanding  and closing icons */}
        <button onClick={() => setPriceRange(!priceRange)}>
          {priceRange ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </button>
      </div>
      {priceRange && (
        <div className="ranging-price">
          <span>R</span>
          <span>RR</span>
          <span>RRR</span>
          <span>RRRR</span>
        </div>
      )}

      <div className="sort-rating">
        <h6>Max.Delivery Fee</h6>
        {/* expanding  and closing icons */}
        <button onClick={() => setMaxPrice(!maxPrice)}>
          {maxPrice ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </button>
      </div>
      {maxPrice && (
        <div className="money-range">
          <input type="range" />
          <div className="ranges">
            <p>R5</p>
            <p>R10</p>
            <p>R15</p>
            <p>R15+</p>
          </div>
        </div>
      )}

      <div className="dietry">
        <h3> Dietery</h3>
        <div className="dietry-types">
          <div className="dietry-type">
            <EnergySavingsLeafIcon style={{ height: "14" }} />
            <p>Vegetarian</p>
          </div>
          <div className="dietry-type">
            <FavoriteIcon style={{ height: "14" }} />
            <p>Vegan</p>
          </div>
          <div className="dietry-type">
            <BakeryDiningIcon style={{ height: "14" }} />
            <p>Hilaal</p>
          </div>
          <div className="dietry-type">
            <MosqueIcon style={{ height: "14" }} />
            <p>Hilaal</p>
          </div>
          <div className="dietry-type">
            <KitchenIcon />
            <p>Hilaal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sort;
