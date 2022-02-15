import React from "react";
import { actions } from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { AuthRedirect } from "../../hoc/authRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMassageBody) => {
      dispatch(actions.sendMessageCreator(newMassageBody));
    },
    // updateNewMessageBody: (body) => {
    //   dispatch(updateNewMessageBodyCreator(body));
    // },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  AuthRedirect
)(Dialogs);
