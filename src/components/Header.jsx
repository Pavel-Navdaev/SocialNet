import React from "react";
import logo from "../icons/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="">
          <img src={logo} alt="" />
          <div className="logoText">Sharky</div>
        </a>
      </div>
      <div className="search">search menu</div>
      <div className="headerNav">mini navigation</div>
      <div className="headerProfile">profile</div>
    </header>
  );
};

export default Header;
