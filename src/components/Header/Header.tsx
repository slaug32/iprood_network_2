import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export type MapStatePropsType = {
  login: string | null;
  isAuth: boolean;
};

export type DispatchPropsType = {
  LogOutThunk: () => void;
};

const Header: React.FC<MapStatePropsType & DispatchPropsType> = (props) => {
  return (
    <header className={s.header}>
      <img src={logo} />
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} <button onClick={props.LogOutThunk}>LogOut</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
