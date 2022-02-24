import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { AppStateType } from "../redux/redux_store";

let mapStateToPropsForRedirect = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
});

type MapPropsType = {
  isAuth: boolean;
};

type DispatchPropsType = {};

export function AuthRedirect<CP>(MyComponent: React.ComponentType<CP>) {
  const RedirectComponent: React.FC<MapPropsType & DispatchPropsType> = (
    props
  ) => {
    let { isAuth, ...restProps } = props;
    if (!isAuth) return <Redirect to='/login' />;

    return <MyComponent {...(restProps as CP)} />;
  };

  let ConnectedAuthRedirectComponent = connect<
    MapPropsType,
    DispatchPropsType,
    CP,
    AppStateType
  >(
    mapStateToPropsForRedirect,
    {}
  )(RedirectComponent);

  return ConnectedAuthRedirectComponent;
}
