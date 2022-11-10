import React from "react";
import c from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={c.dialogItem}>
      <NavLink
        to={props.path}
        className={(navData) => (navData.isActive ? `${c.active}` : "")}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
