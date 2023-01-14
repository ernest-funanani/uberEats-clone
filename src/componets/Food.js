import React from "react";
import "./Food.css";

function Food() {
  return (
    <div>
      <div className="drop-down">
        <div className="sort">
          <p>Sort</p>
          <span class="material-symbols-outlined">arrow_drop_down</span>
        </div>
        <div className="sort-1">
          <p>From Uber Eats</p>
          <span class="material-symbols-outlined">arrow_drop_down</span>
        </div>
        <div className="sort-2">
          <p>Price range</p>
          <span class="material-symbols-outlined">arrow_drop_down</span>
        </div>
        <div className="sort-3">
          <p>Dietry</p>
          <span class="material-symbols-outlined">arrow_drop_down</span>
        </div>
      </div>

      <div className="categories">
        <div className="food-catergories">
          <img
            src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/pizza.png "
            alt=""
          />
          <p>Pizza</p>
        </div>
        <div className="food-catergories">
          <img
            src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/coffeeandtea.png"
            alt=""
          />
          <p>Coffe and tea</p>
        </div>

        <div className="food-catergories">
          <img
            src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/chinese.png"
            alt=""
          />
          <p>Chinise</p>
        </div>
        <div className="food-catergories">
          <img
            src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/sushi.png"
            alt=""
          />
          <p>Sushi</p>
        </div>
        <div className="food-catergories">
          <img
            src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/italian.png"
            alt=""
          />
          <p>Italian</p>
        </div>
        <div className="food-catergories">
          <img
            src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/fastfood.png"
            alt=""
          />
          <p>Fast Food</p>
        </div>
        <div className="food-catergories">
          <img
            src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/comfortfood.png"
            alt=""
          />
          <p>Comfort food</p>
        </div>
        <div className="food-catergories">
          <img
            src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/american.png"
            alt=""
          />
          <p>American</p>
        </div>
        <div className="food-catergories">
          <img
            src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/japanese.png"
            alt=""
          />
          <p>Japanese</p>
        </div>
        <div className="food-catergories">
          <img
            src="https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/greek.png"
            alt=""
          />
          <p>Greek</p>
        </div>
      </div>
    </div>
  );
}

export default Food;
