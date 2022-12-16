import c from "./About.module.css";
import { Form, Formik } from "formik";
import AboutInput from "../../common/Inputs/AboutInput";
import React from "react";

const MainInfo = (props) => {
  return (
    <div className={c.mainInfo}>
      <div>
        <div className={c.mainInfoTitle}>
          <p>Status:</p>
        </div>
        <div className={c.description}>
          <div>
            <Formik
              initialValues={{ status: props.value }}
              onSubmit={props.onSubmit}
            >
              {(formik) => (
                <Form onBlur={formik.handleSubmit}>
                  <AboutInput
                    name={"status"}
                    description={props.status}
                    editMode={props.editMode}
                    activateEditMode={props.activateEditMode}
                  />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
