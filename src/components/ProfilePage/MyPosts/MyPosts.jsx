import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";
import CreatePostContainer from "./CreatePost/CreatePostContainer";

//map posts data into components

const MyPosts = React.memo((props) => {
  let postsElements = props.profilePage.posts.map((post) => (
    <Post key={post.id} postText={post.postText} profile={props.profile} />
  ));
  if (props.isOwner) {
    return (
      <>
        <CreatePostContainer />
        <div className={c.posts}>{postsElements}</div>
      </>
    );
  }
  return <div className={c.posts}>{postsElements}</div>;
});

export default MyPosts;
