import React from "react";
import s from "./Dialogs.module.css";
import { Field, reduxForm } from "redux-form";

const addMassageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name='newMassageBody'
          component='textarea'
          placeholder='Enter your message'
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const MassageReduxForm = reduxForm({
  form: "massage",
})(addMassageForm);

export default MassageReduxForm;
