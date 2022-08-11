import logoPlaceholder from './../../UI library/logoplaceholder.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <a className="header__logo" href="#">
        <img className="header__logo-img"src={logoPlaceholder} alt='logo placeholder'/>
      </a>

      <menu className="header__menu">
          <li className="header__menu-item"><a className="header__menu-link" href="#">About</a></li>
          <li className="header__menu-item"><a className="header__menu-link" href="#">Get Started</a></li>
          <li className="header__menu-item"><a className="header__menu-link" href="#">Documentation</a></li>
      </menu>

      <div>Personal Account</div>
    </header>
  );
};

export default Header;

const PersonalAccount = ({userName}) => {
    return(
        <h2 className="header__personal-account">`Hi ${userName}!`</h2>
    )
}