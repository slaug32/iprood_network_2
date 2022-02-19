import { DialogsType } from "../types";
import { GlobalActionsTypes } from "./redux_store";

type MassagesType = {
  id: number;
  message: string;
};

let initialState = {
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" },
  ] as Array<DialogsType>,
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your it-kamasutra?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
  ] as Array<MassagesType>,
};

export type initialStateType = typeof initialState;
type ActionsTypes = GlobalActionsTypes<typeof actions>;

const dialogsReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case "SEND_MESSAGE":
      let body = action.newMassageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const actions = {
  sendMessage: (newMassageBody: string) =>
    ({
      type: "SEND_MESSAGE",
      newMassageBody,
    } as const),
};

export default dialogsReducer;
