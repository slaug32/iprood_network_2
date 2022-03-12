import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
  getUsersSelector,
} from "../../redux/users_selectors";
import { getUsers } from "../../redux/users_reducer";
import User from "./User";

export type PropsType = {};

let Users: React.FC<PropsType> = (props) => {
  const totalUsersCount = useSelector(getTotalUsersCount);
  const pageSize = useSelector(getPageSize);
  const currentPage = useSelector(getCurrentPage);
  const followingInProgress = useSelector(getFollowingInProgress);
  const users = useSelector(getUsersSelector);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUsers(currentPage, pageSize));
  }, []);

  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  const onPageChanged = (pages: number) => {
    dispatch(getUsers(pages, pageSize));
  };

  const unfollow = (userId: number) => {
    dispatch(unfollow(userId));
  };

  const follow = (userId: number) => {
    dispatch(follow(userId));
  };

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              // className={currentPage === p && style.selectedPage}
              onClick={(e) => {
                onPageChanged(p);
              }}>
              {p}
            </span>
          );
        })}
      </div>
      {users.map((u) => (
        <User
          u={u}
          followingInProgress={followingInProgress}
          key={u.id}
          unfollow={unfollow}
          follow={follow}
        />
      ))}
    </div>
  );
};

export default Users;
