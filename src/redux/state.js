let rerenderTree = () => {
  console.log("this function for observer pattern ");
};

let state = {
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
  },
};

export let addPost = () => {
  let newPost = {
    postText: state.profilePage.newPostText,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderTree(state);
};

export let updatePostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderTree(state);
};

export let subscribe = (observer) => {
  rerenderTree = observer;
};
export default state;
