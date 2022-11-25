import { connect } from "react-redux";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};
// const mapDispatchToProps = () => {
//   return null;
// };
const MyPostsContainer = connect(mapStateToProps, null)(MyPosts);

export default MyPostsContainer;
