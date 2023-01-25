import React, { useState } from "react";
import Capture from "../assets/Capture.PNG";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./Firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <div className="login-header">
        <Link to="/home">
          <img className="login-img" src={Capture} alt="" />
        </Link>
      </div>

      <form className="login">
        <h3>What's your phone number or email?</h3>

        <input
          type="text"
          className="browser-default"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="browser-default"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="continue-btn">
          <button onClick={signIn}>Continue</button>
        </div>
        <button className="login_registerButton" onClick={register}>
          Create your Uber Eats Account
        </button>

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
      </form>
    </>
  );
};

export default Login;
