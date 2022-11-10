import React from "react";
import c from "./Post.module.css";
import PostInfo from "./PostInfo/PostInfo";

const Post = (props) => {
  return (
    <div>
      <PostInfo />
      <div className={c.postText}> {props.postText}</div>
      <div className={c.postLikes}>Like {props.likesCount}</div>
    </div>
  );
};

export default Post;
