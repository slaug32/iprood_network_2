import axios from "axios";
import { UsersType } from "../types";

export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3",
  },
});

export type MyResponseType<D = {}, T = {}> = {
  data: D;
  resultCode: ResultCode;
  messages: Array<string>;
};

export enum ResultCode {
  Success = 0,
  Error = 1,
}

export type GetItemsType = {
  items: Array<UsersType>;
  totalCount: number;
  error: string | null;
};

export enum ResultCodeForCapcthaEnum {
  CaptchaIsRequired = 10,
}

export type APIResponseType<D = {}, RC = ResultCode> = {
  data: D;
  messages: Array<string>;
  resultCode: RC;
};
