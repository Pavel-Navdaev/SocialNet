import React from "react";
import c from "./Dialogs.module.css";
import Message from "./Messages/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
  let messagesElements = props.messages.map((message) => (
    <Message key={message.id} message={message.message} />
  ));
  let dialogsElements = props.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} path={dialog.path} />
  ));

  const updateMessageText = (e) => {
    let text = e.target.value;
    props.updateMessageText(text);
  };
  const sendMessage = () => {
    props.sendMessage();
  };

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>{dialogsElements}</div>
      <div className={c.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <input
              onChange={updateMessageText}
              value={props.newMessageText}
              type="text"
            />
          </div>
          <div>
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
