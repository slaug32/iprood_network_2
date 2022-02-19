import { GetItemsType, instance, MyResponseType } from "./api";
import { ProfileAPI } from "./profileApi";

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => res.data);
  },
  follow(userId: number) {
    return instance
      .post<MyResponseType>(`follow/${userId}`)
      .then((res) => res.data);
  },
  unfollow(userId: number) {
    return instance
      .delete(`follow/${userId}`)
      .then((res) => res.data) as Promise<MyResponseType>;
  },
  getProfile(userId: number) {
    return ProfileAPI.getProfile(userId);
  },
};
