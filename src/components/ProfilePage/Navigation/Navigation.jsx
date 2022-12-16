import React from "react";
import c from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={c.profileNavigation}>
      <NavLink
        to={"timeline"}
        className={(navData) => (navData.isActive ? `${c.active}` : "")}
      >
        <p>Timeline</p>
      </NavLink>
      <NavLink
        to={"about"}
        className={(navData) => (navData.isActive ? `${c.active}` : "")}
      >
        <p>About</p>
      </NavLink>
      <NavLink
        to={"friends"}
        className={(navData) => (navData.isActive ? `${c.active}` : "")}
      >
        <p>Friends</p>
      </NavLink>
      <NavLink
        to={"photos"}
        className={(navData) => (navData.isActive ? `${c.active}` : "")}
      >
        <p>Photos</p>
      </NavLink>
    </div>
  );
};

export default Navigation;
