import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { AppStateType } from "../redux/redux_store";

let mapStateToPropsForRedirect = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
});

type PropsType = {
  isAuth: boolean;
};

export function AuthRedirect<CP>(MyComponent: React.ComponentType<CP>) {
  const RedirectComponent: React.FC<PropsType> = (props) => {
    let { isAuth, ...prevProps } = props;
    if (!isAuth) return <Redirect to='/login' />;

    return <MyComponent {...(prevProps as CP)} />;
  };

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );

  return ConnectedAuthRedirectComponent;
}
