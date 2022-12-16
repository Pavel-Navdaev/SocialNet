import { setUser } from "./authReducer";

const INITIALIZIED_SUCCESS = "INITIALIZIED-SUCCESS";

const preloadedState = {
  initializedStatus: false,
};

const appReducer = (state = preloadedState, action) => {
  switch (action.type) {
    case INITIALIZIED_SUCCESS:
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
  type: INITIALIZIED_SUCCESS,
});

//thunk creators

export const initializeApp = () => {
  return (dispatch) => {
    let initPromisesArray = [dispatch(setUser())];
    Promise.all(initPromisesArray).then(() => {
      dispatch(initializeSuccess());
    });
  };
};

export default appReducer;
