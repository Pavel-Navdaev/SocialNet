import { API } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

const preloadedState = {
  posts: [
    { postText: "Lorem Ipsum Lorem Ipsum", id: 1 },
    { postText: "Lorem Lorem Ipsum Ipsum", id: 2 },
    { postText: "Lorem Ipsum Lorem Ipsum", id: 3 },
  ],
  userProfile: null,
  profileStatus: "",
};

const profileReducer = (state = preloadedState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        postText: action.newPostText,
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

    case SET_USER_PROFILE: {
      return {
        ...state,
        userProfile: action.profile,
      };
    }
    case SET_STATUS:
      return {
        ...state,
        profileStatus: action.status,
      };

    default:
      return state;
  }
};

//action creators

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const updatePostText = (newText) => ({
  type: UPDATE_POST_TEXT,
  newText: newText,
});
export const setUserStatus = (status) => ({ type: SET_STATUS, status });

//thunk creators

export const setProfile = (userId) => {
  return (dispatch) => {
    API.ProfileAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};
export const setStatus = (userId) => {
  return (dispatch) => {
    API.ProfileAPI.getStatus(userId).then((data) => {
      dispatch(setUserStatus(data));
    });
  };
};

export const updateStatus = (status) => {
  return (dispatch) => {
    API.ProfileAPI.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
    });
  };
};

export default profileReducer;
