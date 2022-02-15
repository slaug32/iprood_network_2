import { instance } from "./usersApi";

export enum ResultCode {
  Success = 0,
  Error = 1,
}

type meResponseType = {
  data: { id: number; email: string; login: string };
  resultCode: ResultCode;
  messages: Array<string>;
};

type LoginType = {
  data: { userId: number };
  resultCode: ResultCode;
  messages: Array<string>;
};

export const authAPI = {
  me() {
    return instance.get<meResponseType>(`auth/me`).then((res) => res.data);
  },
  login(email: string | null, password: string | null, rememberMe = false) {
    return instance
      .post<LoginType>(`auth/login`, { email, password, rememberMe })
      .then((res) => res.data);
  },
  logOut() {
    return instance.delete(`auth/login`).then((res) => res.data);
  },
};
