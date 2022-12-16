import * as yup from "yup";

export const postSchema = yup.object().shape({
  newPostText: yup
    .string()
    .max(500, "Too Long!")
    .required("You have not entered text"),
});
