import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import app from "../../assets/app.png";
import google from "../../assets/google.PNG";

import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="top-footer">
        <div className="footer-img">
          <img
            className="uber-banner"
            src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg"
            alt=""
          />
          <div className=" playstore">
            <img src={app} alt="" />
            <img src={google} alt="" />
          </div>
        </div>

        <div className="right-section">
          <div className="footer-center">
            <a href="https://help.uber.com/ubereats?_ga=2.137690099.211098777.1666540383-376600452.1665396037&_gac=1.183516628.1666358907.Cj0KCQjwhsmaBhCvARIsAIbEbH4anLfBQOEU7oKt-EBi7UiLQfNbovaOamtsTIRzaZfazfexxfnNKM4aAoaiEALw_wcB">
              Get Help
            </a>
            <a href="https://uber.com/gift-cards/?_ga=2.113021639.211098777.1666540383-376600452.1665396037&_gac=1.219692267.1666358907.Cj0KCQjwhsmaBhCvARIsAIbEbH4anLfBQOEU7oKt-EBi7UiLQfNbovaOamtsTIRzaZfazfexxfnNKM4aAoaiEALw_wcB">
              Buy gift cards
            </a>
            <a href=" https://merchants.ubereats.com/s/signup/?_ga=2.147193460.211098777.1666540383-376600452.1665396037&_gac=1.56095449.1666358907.Cj0KCQjwhsmaBhCvARIsAIbEbH4anLfBQOEU7oKt-EBi7UiLQfNbovaOamtsTIRzaZfazfexxfnNKM4aAoaiEALw_wcB">
              Add your restaurant
            </a>
            <a href="https://www.uber.com/drive/delivery/?_ga=2.147193460.211098777.1666540383-376600452.1665396037&_gac=1.56095449.1666358907.Cj0KCQjwhsmaBhCvARIsAIbEbH4anLfBQOEU7oKt-EBi7UiLQfNbovaOamtsTIRzaZfazfexxfnNKM4aAoaiEALw_wcB">
              Sign up to deliver
            </a>
            <a href="https://www.uber.com/business/eats?_ga=2.109025985.211098777.1666540383-376600452.1665396037&_gac=1.61666654.1666358907.Cj0KCQjwhsmaBhCvARIsAIbEbH4anLfBQOEU7oKt-EBi7UiLQfNbovaOamtsTIRzaZfazfexxfnNKM4aAoaiEALw_wcB">
              Create business account
            </a>
          </div>

          <div className="footer-right">
            <a href="https://www.ubereats.com/za/near-me">
              Restaurants near me
            </a>
            <a href="https://www.ubereats.com/za/location">View all cities</a>
            <a href="https://www.ubereats.com/za/location#all-countries">
              View all countries
            </a>
            <a href="https://www.ubereats.com/za/pickup/near-me">
              Pick up near me
            </a>
            <a href="https://about.ubereats.com/?_ga=2.171810787.211098777.1666540383-376600452.1665396037&_gac=1.213776742.1666358907.Cj0KCQjwhsmaBhCvARIsAIbEbH4anLfBQOEU7oKt-EBi7UiLQfNbovaOamtsTIRzaZfazfexxfnNKM4aAoaiEALw_wcB">
              About Uber Eats
            </a>
            <div className="translate">
              <span class="material-symbols-outlined">translate</span>
              <a href="https://www.ubereats.com/za/feed?diningMode=PICKUP&mod=selectLanguage&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkclMjAlMjYlMjBIJTIwQ29uc3VsdGluZyUyMEVuZ2luZWVycyUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkNoSUpQWHlnODZJT2xSNFJ6eVdfXzlPaXBRZyUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJnb29nbGVfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0EtMjYuMTQ4OTkyJTJDJTIybG9uZ2l0dWRlJTIyJTNBMjcuOTI2MDg2JTdE&ps=1">
                English
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-a-tags">
          <div className="social-media">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-instagram"></a>
          </div>
          <div className="terms">
            <a href="https://www.uber.com/legal/privacy/users/?_ga=2.151312378.211098777.1666540383-376600452.1665396037&_gac=1.162340430.1666358907.Cj0KCQjwhsmaBhCvARIsAIbEbH4anLfBQOEU7oKt-EBi7UiLQfNbovaOamtsTIRzaZfazfexxfnNKM4aAoaiEALw_wcB">
              Privacy Policy
            </a>
            <a href="https://www.uber.com/terms?_ga=2.151312378.211098777.1666540383-376600452.1665396037&_gac=1.162340430.1666358907.Cj0KCQjwhsmaBhCvARIsAIbEbH4anLfBQOEU7oKt-EBi7UiLQfNbovaOamtsTIRzaZfazfexxfnNKM4aAoaiEALw_wcB">
              Terms
            </a>
            <a href="https://help.uber.com/ubereats/article/uber-eats-pricing?nodeId=2adbed88-9822-4690-9529-3061c4821755&_ga=2.151312378.211098777.1666540383-376600452.1665396037&_gac=1.162340430.1666358907.Cj0KCQjwhsmaBhCvARIsAIbEbH4anLfBQOEU7oKt-EBi7UiLQfNbovaOamtsTIRzaZfazfexxfnNKM4aAoaiEALw_wcB">
              Pricing
            </a>
            <a href="https://privacy.uber.com/privacy/california/?_ga=2.184546021.211098777.1666540383-376600452.1665396037&_gac=1.113176822.1666358907.Cj0KCQjwhsmaBhCvARIsAIbEbH4anLfBQOEU7oKt-EBi7UiLQfNbovaOamtsTIRzaZfazfexxfnNKM4aAoaiEALw_wcB">
              Dont sell my info(south Africa)
            </a>
          </div>
        </div>

        <div className="dev">
          <p> © 2022 Uber Technologies Inc.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
