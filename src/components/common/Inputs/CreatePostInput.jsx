import React from "react";
import { useField } from "formik";
import defaultAvatar from "../../../icons/defaultAvatar.png";
import c from "../../ProfilePage/MyPosts/CreatePost/CreatePost.module.css";

const CreatePostInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  if (meta.touched && meta.error) {
    props.placeholder = `${meta.error}`;
  }
  return (
    <div className={c.textBlock}>
      <img src={defaultAvatar} alt="" />
      <input {...props} {...field} />
    </div>
  );
};

export default CreatePostInput;
