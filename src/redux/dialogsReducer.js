const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

const preloadedState = {
  dialogs: [
    { id: 1, path: "1", name: "Ed" },
    { id: 2, path: "2", name: "Eva" },
    { id: 3, path: "3", name: "Olly" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are u?" },
    { id: 3, message: "Fine" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = preloadedState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText,
      };

    case SEND_MESSAGE:
      let newMessage = {
        message: state.newMessageText,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: "",
      };
    default:
      return state;
  }
};

export const updateMessageTextAC = (newText) => ({
  type: UPDATE_MESSAGE_TEXT,
  newText: newText,
});
export const sendMessageAC = () => ({ type: SEND_MESSAGE });

export default dialogsReducer;
