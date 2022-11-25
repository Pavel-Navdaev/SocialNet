import { addPostAC, updatePostTextAC } from "../../../../redux/profileReducer";
import CreatePost from "./CreatePost";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updatePostText: (postText) => {
      let action = updatePostTextAC(postText);
      dispatch(action);
    },
    addPost: () => {
      let action = addPostAC();
      dispatch(action);
    },
  };
};

const CreatePostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost);

export default CreatePostContainer;
