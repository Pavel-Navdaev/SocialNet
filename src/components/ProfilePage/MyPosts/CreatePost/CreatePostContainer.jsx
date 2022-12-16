import { addPost, updatePostText } from "../../../../redux/profileReducer";
import CreatePost from "./CreatePost";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
  };
};

const CreatePostContainer = connect(mapStateToProps, {
  updatePostText,
  addPost,
})(CreatePost);

export default CreatePostContainer;
