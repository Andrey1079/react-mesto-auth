import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
function Header({ linkName, path }) {
  const loggedIn = false;
  return (
    <header className="header page__header">
      <img src={logo} alt="логотип сайта Mesto" className="header__logo" />
      {loggedIn && <p className="header__login">email</p>}
      <Link className="header__link" to="/">
        email
      </Link>
    </header>
  );
}
export default Header;
