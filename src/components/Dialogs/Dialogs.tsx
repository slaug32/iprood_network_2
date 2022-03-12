import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import MassageReduxForm from "./MassageForm";
import { initialStateType } from "../../redux/dialogs_reducer";

type PropsType = {
  dialogs: initialStateType;
  sendMessage: (massageText: string) => void;
  isAuth: boolean;
};

const Dialogs: React.FC<PropsType> = ({ dialogs, sendMessage, isAuth }) => {
  let state = dialogs;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  const handleSubmit = (values: any) => {
    sendMessage(values.newMassageBody);
  };

  // if (!isAuth) return <Redirect to={"/login"} />;

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
