import { connect } from "react-redux";
import Login from "./Login";

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const LoginContainer = connect(mapStateToProps, {})(Login);
