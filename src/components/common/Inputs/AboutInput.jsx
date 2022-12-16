import Input from "./Input";
import React from "react";

const AboutInput = (props) => {
  let activateEditMode = () => {
    let name = props.name;
    props.activateEditMode(name);
  };
  if (props.editMode) {
    return <Input autoFocus={true} type={"text"} name={props.name} />;
  } else if (props.description) {
    return <div onDoubleClick={activateEditMode}>{props.description}</div>;
  } else {
    return <div onDoubleClick={activateEditMode}>---</div>;
  }
};

export default AboutInput;
