import React from "react";
import { Link } from "react-router-dom";
import Capture from "../assets/Capture.PNG";
import "./Login.css";

function Login() {
  return (
    <div>
      <div className="login-header">
        <Link to="/home">
          <img className="login-img" src={Capture} alt="" />
        </Link>
      </div>

      <div className="login">
        <h3>What's your phone number or email?</h3>
        <input type="text" placeholder="Enter phone number or email" />
        <div className="continue-btn">
          <button>Continue</button>
        </div>

        <div className="line">
          <div className="first">
            <hr />
          </div>
          <p>or</p>
          <div className="first">
            <hr />
          </div>
        </div>
        <button>Continue with google</button>
        <button>Continue with apple</button>
        <button>Continue with facebook</button>
        <footer>
          By proceeding, you consent to get calls, WhatsApp or SMS messages,
          including by automated means, from Uber and its affiliates to the
          number provided.
        </footer>
      </div>
    </div>
  );
}

export default Login;
