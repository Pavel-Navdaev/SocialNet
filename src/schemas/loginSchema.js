import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z]).{6,}$/;

export const loginSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .matches(passwordRules, "6 characters long and requires a number")
    .required("Required"),
});
