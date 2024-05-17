import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import BgImg from "../assets/bg.png";

const LandingPage = () => {
  return (
    <header style={HeaderStyle}>
      <h1 className="main-title text-center">login / register Page</h1>
      <p className="main-para text-center">join us now and start learning</p>
      <div className="buttons text-center">
        <Link to="/login">
          <button className="primary-button">Log In</button>
        </Link>
        <Link to="/register">
          <button className="primary-button" id="reg-btn"><span>Register</span></button>
        </Link>
      </div>
    </header>
  );
};

const HeaderStyle = {
  width: "100%",
  height: "100vh",
  background: `url(${BgImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

export default LandingPage;
