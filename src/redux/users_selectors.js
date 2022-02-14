export const getUsersSelector = (state) => {
  return state.usersR.users;
};

export const getPageSize = (state) => {
  return state.usersR.pageSize;
};

export const getTotalUsersCount = (state) => {
  return state.usersR.totalUsersCount;
};

export const getCurrentPage = (state) => {
  return state.usersR.currentPage;
};

export const getIsFetching = (state) => {
  return state.usersR.isFetching;
};

export const getFollowingInProgress = (state) => {
  return state.usersR.followingInProgress;
};
