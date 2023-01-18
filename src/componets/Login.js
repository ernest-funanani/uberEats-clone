import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../actions/userActions";
import Capture from "../assets/Capture.PNG";
import { openModal } from "../actions/modalAction";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      dispatch(openModal("closed", ""));
    }
  }, [dispatch, userInfo]);

  const submitLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <div>
      <div className="login-header">
        <Link to="/home">
          <img className="login-img" src={Capture} alt="" />
        </Link>
      </div>

      <form className="login" onSubmit={submitLogin}>
        <h3>What's your phone number or email?</h3>
        {error && <h2>{error}</h2>}
        {loading && <h2>Loading...</h2>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="browser-default"
          placeholder="Email address"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="browser-default"
          placeholder="Password"
        />
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
      </form>
    </div>
  );
}

export default Login;
