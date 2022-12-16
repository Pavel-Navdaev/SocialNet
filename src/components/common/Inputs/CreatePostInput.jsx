import React from "react";
import { useField } from "formik";
// import "./inputsCSS.css";
import c from "../../ProfilePage/MyPosts/CreatePost/CreatePost.module.css";

const CreatePostInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  if (meta.touched && meta.error) {
    props.placeholder = `${meta.error}`;
  }
  return (
    <div className={c.textBlock}>
      <img
        src="https://globalhrsummit.com/wp-content/uploads/2018/11/Nick-Vujicic.jpg"
        alt=""
      />
      <input {...props} {...field} />
    </div>
  );
};

export default CreatePostInput;
