import React from "react";
import c from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={c.profileNavigation}>
      <div>
        <p>Timeline</p>
      </div>
      <div>
        <p>About</p>
      </div>
      <div>
        <p>Friends</p>
      </div>
      <div>
        <p>Photos</p>
      </div>
    </div>
  );
};

export default Navigation;
