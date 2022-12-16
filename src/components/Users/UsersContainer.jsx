import { connect } from "react-redux";
import {
  follow,
  requestUsers,
  setPage,
  unfollow,
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getUsers,
  getUsersTotalCount,
} from "../../selectors/usersSelectors";

class UsersClass extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onSetCurrentPage = (page) => {
    this.props.setPage(page);
    this.props.getUsers(page, this.props.pageSize);
  };

  render() {
    return (
      <Users
        usersTotalCount={this.props.usersTotalCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onSetCurrentPage={this.onSetCurrentPage}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        isFetching={this.props.isFetching}
        followingInProgress={this.props.followingInProgress}
      />
    );
  }
}

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     usersTotalCount: state.usersPage.usersTotalCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   };
// };

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    usersTotalCount: getUsersTotalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setPage,
  getUsers: requestUsers,
})(UsersClass);
