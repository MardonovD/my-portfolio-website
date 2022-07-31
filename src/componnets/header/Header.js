import React from "react";
import CTA from "./CTA";
import "./header.css";
const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Mardonov Doston</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
