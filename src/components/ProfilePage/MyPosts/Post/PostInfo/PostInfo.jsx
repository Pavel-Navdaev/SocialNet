import React from "react";
import c from "./PostInfo.module.css";

const PostInfo = () => {
  return (
    <div>
      <div className={c.postInfo}>
        <a href="">
          <img
            src="https://globalhrsummit.com/wp-content/uploads/2018/11/Nick-Vujicic.jpg"
            alt=""
          />
        </a>
        <p className={c.postInfoName}>Name Name Name Name</p>
        <p className={c.postInfoTime}>3 hour ago</p>
      </div>
    </div>
  );
};

export default PostInfo;
