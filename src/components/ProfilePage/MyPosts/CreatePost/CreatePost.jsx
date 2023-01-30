import React from "react";
import CreatePostForm from "./CreatePostForm";

const CreatePost = (props) => {
  return <CreatePostForm isOwner={props.isOwner} addPost={props.addPost} />;
};
export default CreatePost;
