import { API } from "../api/api";
// import { posts } from "@reduxjs/toolkit/src/query/tests/mocks/server";

const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const DELETE_POST = "DELETE-POST";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS";

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
        posts: [newPost, ...state.posts],
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

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        userProfile: { ...state.userProfile, photos: action.photos },
      };

    default:
      return state;
  }
};

//action creators
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
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

export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

//thunk creators

export const setProfile = (userId) => {
  return async (dispatch) => {
    let data = await API.ProfileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
  };
};
export const setStatus = (userId) => {
  return async (dispatch) => {
    let data = await API.ProfileAPI.getStatus(userId);
    dispatch(setUserStatus(data));
  };
};

export const updateStatus = (status) => {
  return async (dispatch) => {
    let data = await API.ProfileAPI.updateStatus(status);
    if (data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  };
};

export const savePhoto = (file) => {
  return async (dispatch) => {
    let data = await API.ProfileAPI.savePhoto(file);
    if (data.resultCode === 0) {
      dispatch(savePhotoSuccess(data.data.photos));
    }
  };
};

export default profileReducer;
