import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";
import CreatePost from "./CreatePost/CreatePost";

const MyPosts = (props) => {
  const postsElements = props.posts.map((post) => (
    <Post postText={post.postText} />
  ));

  return (
    <div>
      <CreatePost />
      <div className={c.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
