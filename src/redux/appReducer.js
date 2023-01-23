import { setUser } from "./authReducer";
import { setProfile, setStatus } from "./profileReducer";

const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";

const preloadedState = {
  initializedStatus: false,
};

const appReducer = (state = preloadedState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initializedStatus: true,
      };

    default:
      return state;
  }
};

//action creators

export const initializeSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

//thunk creators

export const initializeApp = () => {
  return async (dispatch) => {
    let initPromisesArray = [
      dispatch(setUser()).then((id) => {
        dispatch(setProfile(id));
        dispatch(setStatus(id));
      }),
    ];
    await Promise.all(initPromisesArray);
    dispatch(initializeSuccess());
  };
};

export default appReducer;
