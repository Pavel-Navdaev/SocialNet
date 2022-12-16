import { connect } from "react-redux";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    profile: state.profilePage.userProfile,
  };
};

const MyPostsContainer = connect(mapStateToProps, {})(MyPosts);

export default MyPostsContainer;
