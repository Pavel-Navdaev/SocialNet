import { API } from "../api/api";

const SET_USER = "SET-USER";

const preloadedState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = preloadedState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

//action creators

export const setUserSuccess = (id, email, login, isAuth) => ({
  type: SET_USER,
  payload: { id, email, login, isAuth },
});

//thunk creators

export const setUser = () => {
  return async (dispatch) => {
    let response = await API.AuthAPI.getMe();

    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setUserSuccess(id, email, login, true));
      return id;
    }
  };
};

export const loginInNetwork =
  (email, password, rememberMe) => async (dispatch) => {
    let response = await API.AuthAPI.loginMe(email, password, rememberMe);

    if (response.data.resultCode === 0) {
      dispatch(setUser());
      return response.data;
    }
    return response.data;
  };

export const logoutInNetwork = () => async (dispatch) => {
  let response = await API.AuthAPI.logoutMe();
  if (response.data.resultCode === 0) {
    dispatch(setUserSuccess(null, null, null, false));
  }
};

export default authReducer;
