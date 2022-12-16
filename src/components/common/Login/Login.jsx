import React from "react";
import { Navigate } from "react-router-dom";
import { Form, Formik } from "formik";
import Input from "../Inputs/Input";
import { loginSchema } from "../../../schemas/loginSchema";
import CheckboxInput from "../Inputs/CheckboxInput";
import c from "./Login.module.css";
import { connect } from "react-redux";
import { loginInNetwork } from "../../../redux/authReducer";
import { setProfile, setStatus } from "../../../redux/profileReducer";

const Login = (props) => {
  if (props.isAuth) return <Navigate to={"/profile/timeline"} />;

  const onSubmit = (values, actions) => {
    props
      .loginInNetwork(values.email, values.password, values.rememberMe)
      .then((data) => {
        if (data.resultCode === 1) {
          actions.setErrors({
            rememberMe: "Email or Password incorrect",
          });
          throw new Error(data.message);
        }
        return data;
      })
      .then((data) => {
        props.setProfile(data.data.userId);
        props.setStatus(data.data.userId);
      })
      .catch(console.log.bind(console));
  };

  return (
    <div className={c.loginFormContainer}>
      <Formik
        initialValues={{ email: "", password: "", rememberMe: true }}
        onSubmit={onSubmit}
        validationSchema={loginSchema}
        validateOnBlur={true}
        validateOnChange={false}
      >
        {(props) => (
          <Form>
            <Input
              label={"Email/Login"}
              name={"email"}
              type={"email"}
              placeholder={"Enter your email/login"}
            />
            <Input
              label={"Password"}
              name={"password"}
              type={"password"}
              placeholder={"Enter your password"}
            />
            <CheckboxInput
              label={"Remember me"}
              name={"rememberMe"}
              type={"checkbox"}
            />

            <button type={"submit"}>Sign in</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapDispatchToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapDispatchToProps, {
  loginInNetwork,
  setProfile,
  setStatus,
})(Login);
