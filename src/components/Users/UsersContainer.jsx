// import React from "react";
// import Users from "./Users";
import { connect } from "react-redux";
import { FollowAC, SetUsersAC, UnfollowAC } from "../../redux/usersReducer";
import UsersClass from "./UsersClass";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      let action = FollowAC(userId);
      dispatch(action);
    },
    unfollow: (userId) => {
      let action = UnfollowAC(userId);
      dispatch(action);
    },
    setUsers: (users) => {
      let action = SetUsersAC(users);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersClass);
