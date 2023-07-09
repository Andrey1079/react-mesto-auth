import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import React from "react";

function Header(props) {
  return (
    <header className="header page__header">
      <img src={logo} alt="логотип сайта Mesto" className="header__logo" />
      {props?.email && <p className="header__login">{props.email}</p>}
      {props.page === "login" ? (
        <Link className="header__link" to="/register">
          Регистрация
        </Link>
      ) : props.page === "register" ? (
        <Link className="header__link" to="/login">
          Войти
        </Link>
      ) : (
        <Link onClick={props?.onLogOut} className="header__link" to="/login">
          Выйти
        </Link>
      )}
    </header>
  );
}
export default Header;
