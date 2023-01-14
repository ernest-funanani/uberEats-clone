import { React } from "react";
import { Link } from "react-router-dom";
import Footer from "../componets/layouts/Footer";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Home.css";
import AddAddress from "./AddAddress";

function Home() {
  return (
    <div className="main-body">
      <div className="home">
        <div className="nav">
          <div className="nav-menu">
            <MenuIcon sx={{ fontSize: 40 }} />
            <Link to="/home">
              <img
                className="nav-home-img"
                src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="navbar-account">
            <div className="nav-login">
              <PersonIcon sx={{ fontSize: 30 }} />
              <Link to="/login">
                <h4 className="nav-log-text">Log in</h4>
              </Link>
            </div>
            <div className="create-account">
              <h4> Sign up</h4>
            </div>
          </div>
        </div>
        <div className="home-input">
          <h1>Order food to your door</h1>
          <div className="search-input">
            <div className="input-address">
              <LocationOnIcon />
              <input type="text" placeholder="Enter Delivery Adress" />
            </div>
            <div className="del-now">
              <AccessTimeFilledIcon />
              <p>Deliver now</p>
              <ExpandMoreIcon />
            </div>
            <Link className="find-food" to="/pickup">
              <p>Find Food</p>
            </Link>
          </div>

          <div className="home-sign">
            <a href="https://www.ubereats.com/login-redirect/?campaign=signin_universal_link&marketing_vistor_id=bd9a88b6-af8f-4530-a1d2-8dbe307e8998&redirect=%2Fza&guest_mode=false">
              Sign in
            </a>
            <p> with your recent addres</p>
          </div>
        </div>
      </div>
      <AddAddress />
    </div>
  );
}

export default Home;
