import React from "react";
import c from "./CreatePost.module.css";

const CreatePost = (props) => {
  let addPostButton = React.createRef();
  let addPost = () => {
    props.addPost();
  };
  let updatePostText = () => {
    let postText = addPostButton.current.value;
    props.updatePostText(postText);
  };

  return (
    <div className={c.createPost}>
      <div className={c.label}>Create Post</div>
      <div className={c.textBlock}>
        <img
          src="https://globalhrsummit.com/wp-content/uploads/2018/11/Nick-Vujicic.jpg"
          alt=""
        />
        <input
          type={"text"}
          ref={addPostButton}
          placeholder="Write something here..."
          onChange={updatePostText}
          value={props.newPostText}
        />
      </div>
      <div className={c.buttons}>
        <button>Media</button>
        <button onClick={addPost}>Add post</button>
      </div>
    </div>
  );
};
export default CreatePost;
