import { instance, MyResponseType, ResultCode } from "./api";

type DataType = {
  id: number;
  email: string;
  login: string;
};

type LoginType = {
  userId: number;
};

export const authAPI = {
  me() {
    return instance
      .get<MyResponseType<DataType>>(`auth/me`)
      .then((res) => res.data);
  },
  login(email: string | null, password: string | null, rememberMe = false) {
    return instance
      .post<MyResponseType<LoginType, ResultCode>>(`auth/login`, {
        email,
        password,
        rememberMe,
      })
      .then((res) => res.data);
  },
  logOut() {
    return instance.delete(`auth/login`).then((res) => res.data);
  },
};
