import React from "react";
import c from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  let setMe = () => {
    props.setProfile(props.userId);
    props.setStatus(props.userId);
  };
  return (
    <div className={c.nav}>
      <nav>
        <NavLink
          onClick={setMe}
          to="/profile/timeline"
          className={(navData) => (navData.isActive ? `${c.active}` : "")}
        >
          Profile
        </NavLink>
        <NavLink
          to="/dialogs"
          className={(navData) => (navData.isActive ? `${c.active}` : "")}
        >
          Dialogs
        </NavLink>
        <NavLink
          to="/users"
          className={(navData) => (navData.isActive ? `${c.active}` : "")}
        >
          Users
        </NavLink>
        <NavLink
          to="/groups"
          className={(navData) => (navData.isActive ? `${c.active}` : "")}
        >
          Groups
        </NavLink>
        <NavLink
          to="/friends"
          className={(navData) => (navData.isActive ? `${c.active}` : "")}
        >
          Friends
        </NavLink>
        <NavLink
          to="/settings"
          className={(navData) => (navData.isActive ? `${c.active}` : "")}
        >
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
