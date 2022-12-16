import About from "./About";
import React from "react";
import { connect } from "react-redux";
import { updateStatus } from "../../../redux/profileReducer";

class AboutContainer extends React.Component {
  state = {
    status: this.props.status,
    editMode: {
      statusEditMode: false,
      aboutMeEditMode: false,
    },
  };
  activateEditMode = (InputName) => {
    let newProp = InputName + "EditMode";
    this.setState({
      ...this.state,
      editMode: { ...this.state.editMode, [newProp]: true },
    });
  };
  deactivateEditMode = (status, InputName) => {
    let newProp = InputName + "EditMode";
    this.setState({
      status: status,
      ...this.state,
      editMode: { ...this.state.editMode, statusEditMode: false },
    });

    this.props.updateStatus(status);
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <About
        status={this.props.status}
        editMode={this.state.editMode.statusEditMode}
        value={this.state.status}
        activateEditMode={this.activateEditMode}
        deactivateEditMode={this.deactivateEditMode}
        onChangeStatus={this.onChangeStatus}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    status: state.profilePage.profileStatus,
  };
};

export default connect(mapStateToProps, { updateStatus })(AboutContainer);
