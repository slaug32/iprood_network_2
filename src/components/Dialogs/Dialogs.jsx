import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { Field } from "redux-form";
import MassageReduxForm from "./MassageForm";
import { initialStateType } from "../../redux/dialogs_reducer";

// type PropsType = {
//   dialogs: initialStateType;
//   sendMessage: (values: string) => void;
//   isAuth: boolean;
// };
// : React.FC<PropsType>
const Dialogs = ({ dialogs, sendMessage, isAuth }) => {
  let state = dialogs;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  const handleSubmit = (values) => {
    sendMessage(values.newMassageBody);
  };

  if (!isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <MassageReduxForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Dialogs;
