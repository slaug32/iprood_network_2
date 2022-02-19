import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' activeClassName={s.activeLink}>
          Мой профиль
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to='/dialogs' activeClassName={s.activeLink}>
          Сообщения
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to='/users' activeClassName={s.activeLink}>
          Пользователи
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to='/news' activeClassName={s.activeLink}>
          Новости
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to='/music' activeClassName={s.activeLink}>
          Музыка
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to='/settings' activeClassName={s.activeLink}>
          Настройки
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
