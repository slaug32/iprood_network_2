import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
  getUsersSelector,
} from "../../redux/users_selectors";
import { getUsers } from "../../redux/users_reducer";

export type MapStatePropsType = {};

export type MapDispatchPropsType = {
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
};

let Users: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
  const totalUsersCount = useSelector(getTotalUsersCount);
  const pageSize = useSelector(getPageSize);
  const currentPage = useSelector(getCurrentPage);
  const followingInProgress = useSelector(getFollowingInProgress);
  const users = useSelector(getUsersSelector);

  const dispatch = useDispatch();

  React.useEffect(() => {
    // @ts-ignore
    dispatch(getUsers(currentPage, pageSize));
  }, []);

  // @ts-ignore
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  const onPageChanged = (pages: number) => {
    // @ts-ignore
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
              // @ts-ignore
              className={currentPage === p && s.selectedPage}
              onClick={(e) => {
                onPageChanged(p);
              }}>
              {p}
            </span>
          );
        })}
      </div>
      {users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={s.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    unfollow(u.id);
                  }}>
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    follow(u.id);
                  }}>
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
