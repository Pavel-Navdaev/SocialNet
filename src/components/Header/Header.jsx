import React from "react";
import logo from "../../icons/logo.png";
import c from "./Header.module.css";
import { NavLink } from "react-router-dom";
import userDefault from "../../icons/userDefault.png";

const Header = (props) => {
  let setMe = () => {
    props.setProfile(props.userId);
    props.setStatus(props.userId);
  };
  return (
    <div className={c.headerWrapper}>
      <header className={c.header}>
        <div className={c.logo}>
          <a href="#">
            <img src={logo} alt="" />
            <div className={c.logoText}>Sharky</div>
          </a>
        </div>
        <div className={c.search}>search menu</div>
        <div className={c.headerNav}>mini navigation</div>
        <div className={c.headerProfile}>
          {props.isAuth ? (
            <div>
              <NavLink onClick={setMe} to={"/profile/timeline"}>
                <img src={props.imgSrc ? props.imgSrc : userDefault} alt="" />
                {props.name}
              </NavLink>
              <button onClick={props.logoutInNetwork}>Sign Out</button>
            </div>
          ) : (
            <NavLink to={"/login"}>Sign In</NavLink>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
