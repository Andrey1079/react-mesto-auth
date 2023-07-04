import { Link } from "react-router-dom";
import AuthPage from "./AuthPage";

export default function Register() {
  return (
    <>
      <AuthPage title="Регистрация" text="Зарегистрироваться" />
      <p className="register__subtitile">
        Уже зарегистрированы?
        <Link className="register__link" to="/">
          Войти
        </Link>
      </p>
    </>
  );
}
