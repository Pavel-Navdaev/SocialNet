const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

const preloadedState = {
  posts: [
    { postText: "Lorem Ipsum Lorem Ipsum" },
    { postText: "Lorem Ipsum Lorem Ipsum" },
    { postText: "Lorem Ipsum Lorem Ipsum" },
  ],
  newPostText: "",
};

const profileReducer = (state = preloadedState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        postText: state.newPostText,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case UPDATE_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };

    default:
      return state;
  }
};

export const addPostAC = () => ({ type: ADD_POST });
export const updatePostTextAC = (newText) => ({
  type: UPDATE_POST_TEXT,
  newText: newText,
});

export default profileReducer;
