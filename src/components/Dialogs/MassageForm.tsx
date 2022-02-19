import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

const addMassageForm: React.FC<InjectedFormProps> = (props) => {
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
