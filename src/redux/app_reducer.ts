// import { authAPI } from "../api/api";
// import { stopSubmit } from "redux-form";
import { getAuthUserData } from "./auth_reducer";

const INITIALIZED = "INITIALIZED";

let initialState = {
  initialized: false as boolean,
};

type initialStateType = typeof initialState;

const appReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case INITIALIZED:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const actions = {
  initializedSuccess: () => ({ type: INITIALIZED } as const),
};

export const initialize = () => async (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  await Promise.all([promise]);
  dispatch(actions.initializedSuccess());
};

export default appReducer;
