import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean,
};

type initialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};

const actions = {
  setAuthUserData: (
    userId: number,
    email: string,
    login: string,
    isAuth: boolean
  ) =>
    ({
      type: SET_USER_DATA,
      data: { userId, email, login, isAuth },
    } as const),
};

export const getAuthUserData = () => async (dispatch: any) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(actions.setAuthUserData(id, email, login, true));
  }
};

export const LoginThunk =
  (email: string, password: string, rememberMe: boolean) =>
  async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
      dispatch(actions.setAuthUserData());
    }
  };

export const LogOutThunk = () => async (dispatch: any) => {
  let response = await authAPI.logOut();
  if (response.data.resultCode === 0) {
    dispatch(actions.setAuthUserData(null, null, null, null, false));
  }
};

export default authReducer;
