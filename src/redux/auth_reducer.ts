import { Dispatch } from "redux";
import { authAPI } from "../api/authApi";
import { ResultCode } from "../api/api";
import { GlobalActionsTypes } from "./redux_store";

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean,
};

type initialStateType = typeof initialState;
type ActionsTypes = GlobalActionsTypes<typeof actions>;

const authReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};

export const actions = {
  setAuthUserData: (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
  ) =>
    ({
      type: "SET_USER_DATA",
      data: { userId, email, login, isAuth },
    } as const),
};

export const getAuthUserData =
  () => async (dispatch: Dispatch<ActionsTypes>) => {
    let meData = await authAPI.me();
    if (meData.resultCode === ResultCode.Success) {
      let { id, login, email } = meData.data;
      dispatch(actions.setAuthUserData(id, email, login, true));
    }
  };

export const LoginThunk =
  (email: string | null, password: string | null, rememberMe: boolean) =>
  async (dispatch: any) => {
    let loginData = await authAPI.login(email, password, rememberMe);
    if (loginData.resultCode === 0) {
      // @ts-ignore
      dispatch(actions.setAuthUserData());
    }
  };

export const LogOutThunk = () => async (dispatch: Dispatch<ActionsTypes>) => {
  let response = await authAPI.logOut();
  if (response.data.resultCode === 0) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
