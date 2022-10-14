import React from "react";
import logo from "../../icons/logo.png";
import c from "./Header.module.css";

const Header = () => {
  return (
    <header className={c.header}>
      <div className={c.logo}>
        <a href="#">
          <img src={logo} alt="" />
          <div className={c.logoText}>Sharky</div>
        </a>
      </div>
      <div className={c.search}>search menu</div>
      <div className={c.headerNav}>mini navigation</div>
      <div className={c.headerProfile}>profile</div>
    </header>
  );
};

export default Header;
