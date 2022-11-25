import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";
import CreatePostContainer from "./CreatePost/CreatePostContainer";

const MyPosts = (props) => {
  //map posts data into components
  let postsElements = props.profilePage.posts.map((post) => (
    <Post postText={post.postText} />
  ));

  return (
    <div>
      <CreatePostContainer />
      <div className={c.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
