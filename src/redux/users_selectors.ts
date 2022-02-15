import { AppStateType } from "./redux_store";

export const getUsersSelector = (state: AppStateType) => {
  return state.usersR.users;
};

export const getPageSize = (state: AppStateType) => {
  return state.usersR.pageSize;
};

export const getTotalUsersCount = (state: AppStateType) => {
  return state.usersR.totalUsersCount;
};

export const getCurrentPage = (state: AppStateType) => {
  return state.usersR.currentPage;
};

export const getIsFetching = (state: AppStateType) => {
  return state.usersR.isFetching;
};

export const getFollowingInProgress = (state: AppStateType) => {
  return state.usersR.followingInProgress;
};
