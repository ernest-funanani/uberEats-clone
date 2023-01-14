import React from "react";
import "./AddAddress.css";

const AddAddress = () => {
  return (
    <div className="add-res-signup">
      <div className="add-res">
        <img
          src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/dd109bb1f7572eed.png"
          alt=""
        />
        <h3 className="add-feed">Feed your employes</h3>
        <a href="">Create your bussines acoount</a>
      </div>

      <div className="add-res">
        <img
          src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/8148ef38ec4096b7.png"
          alt=""
        />
        <h3 className="add-feed">Your restaurant, delivered</h3>
        <a href="">Add your restaurant</a>
      </div>

      <div className="add-res">
        <img
          src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/7a9d4feba62d2c0b.png"
          alt=""
        />
        <h3 className="add-feed">Deliver with Uber Eats</h3>
        <a href="">Sign up to deliver</a>
      </div>
    </div>
  );
};

export default AddAddress;
