import React from "react";
import { NavLink } from "react-router-dom";
import { UsersType } from "../../types";
import style from "./users.module.css";
import userPhoto from "../../assets/images/user.png";

type PropsType = {
  u: UsersType;
  followingInProgress: Array<number>;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
};

const User: React.FC<PropsType> = ({
  followingInProgress,
  unfollow,
  follow,
  u,
}) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={"/profile/" + u.id}>
            <img
              src={u.photos.small != null ? u.photos.small : userPhoto}
              className={style.userPhoto}
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
    </div>
  );
};

export default User;
