import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Button } from "antd";

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
          <div className={s.log}>
            {props.login} <Button onClick={props.LogOutThunk}>LogOut</Button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
