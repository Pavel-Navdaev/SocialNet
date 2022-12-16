import React from "react";
import c from "./UserItem.module.css";
import userDefaultPhoto from "../../../icons/userDefault.png";
import { NavLink } from "react-router-dom";

const UserItem = (props) => {
  let follow = () => {
    props.follow(props.id);
  };
  let unfollow = () => {
    props.unfollow(props.id);
  };
  return (
    <div key={props.id} className={c.wrapper}>
      <div className={c.profilePhoto}>
        <NavLink to={"/profile/timeline/" + props.id}>
          <img
            src={props.imgURL != null ? props.imgURL : userDefaultPhoto}
            alt=""
          />
        </NavLink>
      </div>
      <div className={c.userData}>
        <NavLink to={"/profile/timeline/" + props.id}>
          <p className={c.name}>{props.userName}</p>
        </NavLink>
        <p className={c.status}>
          {props.status !== null && props.status !== ""
            ? props.status.length > 65
              ? props.status.substring(0, 65) + "..."
              : props.status
            : "no status"}
        </p>
        <div className={c.location}>
          <p className={c.country}>{"props.country"}</p>
          <p className={c.city}>{"props.cityName"}</p>
        </div>
      </div>
      <div className={c.followButton}>
        {props.followed ? (
          <button
            disabled={props.followingInProgress.some((id) => id === props.id)}
            onClick={unfollow}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={props.followingInProgress.some((id) => id === props.id)}
            onClick={follow}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
};

export default UserItem;
