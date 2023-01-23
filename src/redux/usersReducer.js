import { API } from "../api/api";
import { changeObject } from "../components/common/helpers/changeObInArrayjHelper";

const SET_USERS = "SET-USERS";
const SET_USERS_TOTAL_COUNT = "SET-USERS-TOTAL-COUNT";
const SET_PAGE = "SET-PAGE";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_FETCHING = "SET-FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE-FOLLOWING-PROGRESS";

const preloadedState = {
  users: [],
  currentPage: 1,
  pageSize: 8,
  usersTotalCount: 0,
  isFetching: null,
  followingInProgress: [],
};

const usersReducer = (state = preloadedState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: changeObject(state.users, "id", action.userID, {
          followed: true,
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: changeObject(state.users, "id", action.userID, {
          followed: false,
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };

    case SET_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };

    case SET_USERS_TOTAL_COUNT:
      return {
        ...state,
        usersTotalCount: action.totalCount,
      };

    case SET_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.id]
          : [...state.followingInProgress.filter((id) => id !== action.id)],
      };

    default:
      return state;
  }
};

//action creators

export const followSucsess = (userID) => ({ type: FOLLOW, userID });
export const unfollowSucsess = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setPage = (page) => ({ type: SET_PAGE, page });
export const setFetching = (isFetching) => ({
  type: SET_FETCHING,
  isFetching,
});
export const setUsersTotalCount = (totalCount) => ({
  type: SET_USERS_TOTAL_COUNT,
  totalCount,
});
export const toggleFollowingProgress = (id, isFetching) => ({
  type: TOGGLE_FOLLOWING_PROGRESS,
  id,
  isFetching,
});

//thunk creators

export const requestUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(setFetching(true));
    let data = await API.UsersAPI.getUsers(currentPage, pageSize);
    dispatch(setUsers(data.items));
    dispatch(setUsersTotalCount(data.totalCount));
    dispatch(setFetching(false));
  };
};

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingProgress(userId, true));
  let data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(toggleFollowingProgress(userId, false));
    dispatch(actionCreator(userId));
  }
};
export const follow = (userId) => {
  return (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      API.UsersAPI.createFollow,
      followSucsess
    );
  };
};

export const unfollow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      API.UsersAPI.deleteFollow,
      unfollowSucsess
    );
  };
};

export default usersReducer;
