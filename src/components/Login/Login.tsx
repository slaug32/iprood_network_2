import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { LoginThunk } from "../../redux/auth_reducer";
import { AppStateType } from "../../redux/redux_store";

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType>> = (props) => {
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

const LoginReduxForm = reduxForm<LoginFormValuesType>({
  form: "login",
})(LoginForm);

type LoginFormValuesType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

type mapStateToPropsType = {
  isAuth: boolean;
};

type mapDispatchToPropsType = {
  LoginThunk: (email: string, password: string, rememberMe: boolean) => void;
};

const Login: React.FC<mapStateToPropsType & mapDispatchToPropsType> = (
  props
) => {
  const handleSubmit = (formData: any) => {
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

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { LoginThunk })(Login);
