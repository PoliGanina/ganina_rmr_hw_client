import { Link } from "react-router-dom";
import { useLogin } from "../login/context/useLogin";
import logoPlaceholder from "../../uikit/logoplaceholder.svg";
import "./header.scss";

const Header = () => {
  const { user } = useLogin();
  return (
    <header className="header">
      <a className="header__logo" href="#">
        <img
          className="header__logo-img"
          src={logoPlaceholder}
          alt="logo placeholder"
        />
      </a>

      <menu className="header__menu">
        <li className="header__menu-item">
          <a className="header__menu-link" href="#">
            About
          </a>
        </li>
        <li className="header__menu-item">
          <a className="header__menu-link" href="#">
            Get Started
          </a>
        </li>
        <li className="header__menu-item">
          <a className="header__menu-link" href="#">
            Documentation
          </a>
        </li>
      </menu>

      { user ? (
        <PersonalAccount />
      ) : (
        <Link to="/" className="header__login">
          Login
        </Link>
      )}
    </header>
  );
};

export default Header;

const PersonalAccount = () => {
  const { user, handleLogout } = useLogin();
  return (
    <div className="header__personal-account">
      <p>Hi {user.name}!</p>
      <Link to="/" className="header__logout" onClick={handleLogout}>
        Logout
      </Link>
    </div>
  );
};
