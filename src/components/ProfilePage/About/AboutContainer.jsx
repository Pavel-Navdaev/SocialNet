import About from "./About";
import React from "react";
import { connect } from "react-redux";
import { updateStatus } from "../../../redux/profileReducer";

const AboutContainer = (props) => {
  return <About status={props.status} updateStatus={props.updateStatus} />;
};

let mapStateToProps = (state) => {
  return {
    status: state.profilePage.profileStatus,
  };
};

export default connect(mapStateToProps, { updateStatus })(AboutContainer);
