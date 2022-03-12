import React from "react";
import { actions } from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { AuthRedirect } from "../../hoc/authRedirect";
import { compose } from "redux";
import { AppStateType } from "../../redux/redux_store";

let mapStateToProps = (state: AppStateType) => {
  return {
    dialogs: state.dialogs,
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, { ...actions }),
  AuthRedirect
)(Dialogs);
