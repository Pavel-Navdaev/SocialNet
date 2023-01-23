import { createSelector } from "reselect";

const getUsersSelector = (state) => {
  return state.usersPage.users;
};
export const getUsers = createSelector(getUsersSelector, (users) => {
  return users;
});

export const getPageSizeSelector = (state) => {
  return state.usersPage.pageSize;
};
export const getPageSize = createSelector(getPageSizeSelector, (pageSize) => {
  return pageSize;
});

const getUsersTotalCountSelector = (state) => {
  return state.usersPage.usersTotalCount;
};
export const getUsersTotalCount = createSelector(
  getUsersTotalCountSelector,
  (totalCount) => {
    return totalCount;
  }
);

const getCurrentPageSelector = (state) => {
  return state.usersPage.currentPage;
};
export const getCurrentPage = createSelector(
  getCurrentPageSelector,
  (currentPage) => {
    return currentPage;
  }
);

const getIsFetchingSelector = (state) => {
  return state.usersPage.isFetching;
};

export const getIsFetching = createSelector(
  getIsFetchingSelector,
  (isFetching) => {
    return isFetching;
  }
);

const getFollowingInProgressSelector = (state) => {
  return state.usersPage.followingInProgress;
};

export const getFollowingInProgress = createSelector(
  getFollowingInProgressSelector,
  (followingInProgress) => {
    return followingInProgress;
  }
);
