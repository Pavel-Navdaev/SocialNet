import React from "react";
import c from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    <div>
      <div>My posts:</div>
      <div>New post</div>
      <div className={c.posts}>
        <div className={c.post}>Post 1</div>
        <div className={c.post}>Post 2</div>
      </div>
    </div>
  );
};

export default MyPosts;
