import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import { UsersType } from "../../types";

export type MapStatePropsType = {
  users: Array<UsersType>;
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  followingInProgress: Array<number>;
};

export type MapDispatchPropsType = {
  onPageChanged: (pages: number) => void;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
};

let Users: React.FC<MapStatePropsType & MapDispatchPropsType> = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  followingInProgress,
  unfollow,
  follow,
  users,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

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
              // className={currentPage === p && s.selectedPage}
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
