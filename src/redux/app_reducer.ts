import { Dispatch } from "redux";
import { getAuthUserData } from "./auth_reducer";
import { GlobalActionsTypes } from "./redux_store";

let initialState = {
  initialized: false as boolean,
};

type initialStateType = typeof initialState;
type ActionsTypes = GlobalActionsTypes<typeof actions>;

const appReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case "INITIALIZED":
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const actions = {
  initializedSuccess: () => ({ type: "INITIALIZED" } as const),
};

export const initialize = () => async (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  await Promise.all([promise]);
  dispatch(actions.initializedSuccess());
};

export default appReducer;
