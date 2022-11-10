import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";
import CreatePost from "./CreatePost/CreatePost";

const MyPosts = (props) => {
  //map posts data into components
  let postsElements = props.state.posts.map((post) => (
    <Post postText={post.postText} />
  ));

  return (
    <div>
      <CreatePost
        newPostText={props.state.newPostText}
        addPost={props.addPost}
        updatePostText={props.updatePostText}
      />
      <div className={c.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
