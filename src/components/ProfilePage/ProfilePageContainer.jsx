import React from "react";
import ProfilePage from "./ProfilePage";
import { connect } from "react-redux";
import { setProfile, setStatus } from "../../redux/profileReducer";
import Preloader from "../common/Preloader/Preloader";
import { setUser } from "../../redux/authReducer";
import { withAuthRedirect } from "../common/hoc/withAuthRedirect";
import { compose } from "redux";
import withRouter from "../common/hoc/withRouter";

class ProfilePageContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId || userId === "/timeline") {
      userId = this.props.myId;
      return <Preloader />;
    }
    this.props.setProfile(userId);
    this.props.setStatus(userId);
  }

  render() {
    return <ProfilePage {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.userProfile,
    myId: state.auth.id,
  };
};

export default compose(
  connect(mapStateToProps, { setProfile, setUser, setStatus }),
  withRouter,
  withAuthRedirect
)(ProfilePageContainer);
