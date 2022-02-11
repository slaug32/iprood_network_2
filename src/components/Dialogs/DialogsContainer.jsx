import React from "react";
import {
  sendMessageCreator,
  // updateNewMessageBodyCreator,
} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { AuthRedirect } from "../../hoc/authRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMassageBody) => {
      dispatch(sendMessageCreator(newMassageBody));
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
