import React from "react";
import c from "./About.module.css";
import { Form, Formik } from "formik";
import AboutInput from "../../common/Inputs/AboutInput";

const About = (props) => {
  const onSubmit = (values, actions) => {
    console.log(actions);
    props.deactivateEditMode(values.status);
  };

  return (
    <div className={c.aboutWrapper}>
      <div className={c.title}>
        <h2>Personal Info</h2>
      </div>
      <div className={c.mainInfo}>
        <div>
          <div className={c.mainInfoTitle}>
            <p>Status:</p>
          </div>
          <div className={c.description}>
            <div>
              <Formik
                initialValues={{ status: props.value }}
                onSubmit={onSubmit}
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
      <div className={c.contactsInfo}>Contacts</div>
    </div>
  );
};

export default About;
