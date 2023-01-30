import React from "react";
import c from "./PostInfo.module.css";
import defaultAvatar from "../../../../../icons/defaultAvatar.png";
import Preloader from "../../../../common/Preloader/Preloader";

const PostInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={c.postInfo}>
        <a href="">
          <img
            src={
              props.profile.photos.large !== null
                ? props.profile.photos.large
                : defaultAvatar
            }
            alt=""
          />
        </a>
        <p className={c.postInfoName}>{props.profile.fullName}</p>
        <p className={c.postInfoTime}>3 hour ago</p>
      </div>
    </div>
  );
};

export default PostInfo;
