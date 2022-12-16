import React from "react";
import CreatePostForm from "./CreatePostForm";

const CreatePost = (props) => {
  return <CreatePostForm addPost={props.addPost} />;
};
export default CreatePost;
