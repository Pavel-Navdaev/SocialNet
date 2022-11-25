import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { postText: "Lorem Ipsum Lorem Ipsum" },
        { postText: "Lorem Ipsum Lorem Ipsum" },
        { postText: "Lorem Ipsum Lorem Ipsum" },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogs: [
        { path: "1", name: "Ed" },
        { path: "2", name: "Eva" },
        { path: "3", name: "Olly" },
      ],
      messages: [
        { message: "Hi" },
        { message: "How are u?" },
        { message: "Fine" },
      ],
      newMessageText: "",
    },
  },
  _callSubscriber() {
    console.log("this function for observer pattern ");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
