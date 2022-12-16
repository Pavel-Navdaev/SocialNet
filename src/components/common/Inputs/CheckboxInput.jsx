import React from "react";
import { useField } from "formik";
import "./inputsCSS.css";

const CheckboxInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={"inputComponent"}>
      <label>{label}</label>
      <label className={"containerForCheckbox"}>
        <input
          {...field}
          {...props}
          className={
            meta.touched && meta.error ? `${"inputError"}` : `${"usualInput"}`
          }
        />
        <span className={"checkmark"}></span>
      </label>
      {meta.touched && meta.error && (
        <div className={"errorText"}>{meta.error}</div>
      )}
    </div>
  );
};

export default CheckboxInput;
