// components/Home/Banner/Banner.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>Gift your team, clients, family, or yourself in India.</h1>
          <p>
            Discover the true joy of giving & receiving by letting recipients
            Pick Their Own choice of gift hampers
          </p>
          <div className="ctas">
            <Link to="/about" className="banner-cta v1">
              Read More
            </Link>
            <Link to="/all-products" className="banner-cta v2">Shop Now</Link>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
