import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { LoginThunk } from "../../redux/auth_reducer";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name='email'
          placeholder='user name'
          component='input'
          type='email'
        />
      </div>
      <div>
        <Field
          name='password'
          placeholder='password'
          component='input'
          type='password'
        />
      </div>
      <div>
        <Field name='rememberMe' type='checkbox' component='input' />
      </div>
      <div>
        <button>login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const handleSubmit = (formData) => {
    props.LoginThunk(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to='/profile' />;
  }

  return (
    <div>
      <div>регистрация</div>
      <LoginReduxForm onSubmit={handleSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth });

export default connect(mapStateToProps, { LoginThunk })(Login);
