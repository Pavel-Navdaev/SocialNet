const SET_USERS = "SET-USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

const preloadedState = {
  users: [],
};

const usersReducer = (state = preloadedState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };

    default:
      return state;
  }
};

export const FollowAC = (userID) => ({ type: FOLLOW, userID: userID });
export const UnfollowAC = (userID) => ({ type: UNFOLLOW, userID: userID });
export const SetUsersAC = (users) => ({ type: SET_USERS, users: users });

export default usersReducer;
