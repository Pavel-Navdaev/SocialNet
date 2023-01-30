import { connect } from "react-redux";
import MyPosts from "./MyPosts";
import React from "react";
import { compose } from "redux";
import withRouter from "../../common/hoc/withRouter";
import { useOutletContext } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    userId: state.auth.id,
    profilePage: state.profilePage,
    profile: state.profilePage.userProfile,
  };
};
const MyPostsContainer = (props) => {
  const isOwner = useOutletContext();
  return <MyPosts {...props} isOwner={isOwner} />;
};

export default compose(
  connect(mapStateToProps, {}),
  withRouter
)(MyPostsContainer);
