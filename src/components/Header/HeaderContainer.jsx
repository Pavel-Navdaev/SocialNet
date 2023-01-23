import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logoutInNetwork } from "../../redux/authReducer";
import { setProfile, setStatus } from "../../redux/profileReducer";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}
let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    name: state.auth.login,
    userId: state.auth.id,
  };
};

export default connect(mapStateToProps, {
  logoutInNetwork,
  setProfile,
  setStatus,
})(HeaderContainer);
