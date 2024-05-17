import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="text-center">
      <h1 className="main-title home-page-title">welcome to our website</h1>
      <Link to="/">
        <button className="primary-button">Log Out</button>
      </Link>
    </div>
  );
};

export default HomePage;
