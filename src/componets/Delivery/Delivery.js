import React from "react";
import Restaurant from "./Restaurant";
import Sort from "./Sort";
import "./Delivery.css";
function Delivery() {
  return (
    <div className="delivery-restarant">
      <Sort />
      <Restaurant />
    </div>
  );
}

export default Delivery;
