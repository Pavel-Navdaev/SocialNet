import React from "react";
import { useField } from "formik";
import "./inputsCSS.css";

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={"inputComponent"}>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={
          meta.touched && meta.error ? `${"inputError"}` : `${"usualInput"}`
        }
      />
      {meta.touched && meta.error && (
        <div className={"errorText"}>{meta.error}</div>
      )}
    </div>
  );
};

export default Input;
