import c from "./CreatePost.module.css";
import React from "react";
import { Form, Formik } from "formik";
import CreatePostInput from "../../../common/Inputs/CreatePostInput";
import { postSchema } from "../../../../schemas/postSchema";

const CreatePostForm = (props) => {
  let onSubmit = (values, actions) => {
    props.addPost(values.newPostText);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ newPostText: "" }}
      onSubmit={onSubmit}
      validationSchema={postSchema}
    >
      <Form>
        <div className={c.createPost}>
          <div className={c.label}>Create Post</div>
          <CreatePostInput
            type={"text"}
            name={"newPostText"}
            placeholder="Write something here..."
          />
          <div className={c.buttons}>
            <button>Media</button>
            <button>Add post</button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default CreatePostForm;
