import React from "react";
import c from "./UserItem.module.css";
import userDefaultPhoto from "../../../icons/userDefault.png";

const UserItem = (props) => {
  let follow = () => {
    props.follow(props.id);
  };
  let unfollow = () => {
    props.unfollow(props.id);
  };
  return (
    <div className={c.wrapper}>
      <div className={c.profilePhoto}>
        <img
          src={props.imgURL != null ? props.imgURL : userDefaultPhoto}
          alt=""
        />
      </div>
      <div className={c.userData}>
        <p className={c.name}>{props.userName}</p>
        <p className={c.status}>
          {props.status != null ? props.status : "no status"}
        </p>
        <div className={c.location}>
          <p className={c.country}>{"props.country"}</p>
          <p className={c.city}>{"props.cityName"}</p>
        </div>
      </div>
      <div className={c.followButton}>
        {props.followed ? (
          <button onClick={unfollow}>Unfollow</button>
        ) : (
          <button onClick={follow}>Follow</button>
        )}
      </div>
    </div>
  );
};

export default UserItem;
