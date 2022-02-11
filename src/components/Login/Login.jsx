import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='login' placeholder='user name' component='input' />
      </div>
      <div>
        <Field name='password' placeholder='password' component='input' />
      </div>
      <div>
        <Field name='remember' type='checkbox' component='input' />
      </div>
      <div>
        <button>login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "lodin",
})(LoginForm);

const Login = (props) => {
  const handleSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <div>регистрация</div>
      <LoginReduxForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
