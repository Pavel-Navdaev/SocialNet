import React from "react";
import c from "./Dialogs.module.css";
import Message from "./Messages/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
  let messagesElements = props.state.messages.map((message) => (
    <Message message={message.message} />
  ));
  let dialogsElements = props.state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} path={dialog.path} />
  ));
  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>{dialogsElements}</div>
      <div className={c.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
