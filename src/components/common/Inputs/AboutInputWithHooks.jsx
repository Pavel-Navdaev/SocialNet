import Input from "./Input";
import React, { useState } from "react";

const AboutInputWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
  };

  if (editMode) {
    return (
      <Input
        onBlur={deactivateEditMode}
        autoFocus={true}
        type={"text"}
        name={props.name}
      />
    );
  } else if (props.description) {
    return (
      <div onDoubleClick={activateEditMode}>{props.description || "---"}</div>
    );
  }
};

export default AboutInputWithHooks;
