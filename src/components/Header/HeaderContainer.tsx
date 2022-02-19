import React from "react";
import Header, { MapStatePropsType, DispatchPropsType } from "./Header";
import { connect } from "react-redux";
import { LogOutThunk } from "../../redux/auth_reducer";
import { AppStateType } from "../../redux/redux_store";

class HeaderContainer extends React.Component<
  MapStatePropsType & DispatchPropsType
> {
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect<MapStatePropsType, DispatchPropsType, {}, AppStateType>(
  mapStateToProps,
  {
    LogOutThunk,
  }
)(HeaderContainer);
