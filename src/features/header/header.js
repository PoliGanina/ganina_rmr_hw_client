import logoPlaceholder from './../../UI library/logoplaceholder.svg';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = ({user, handleLogout}) => {
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

    { user ? <PersonalAccount name={user.name} handleLogout={handleLogout}/> : 
        <Link 
        to='/'
        className="header__login"
        >Login</Link>}
    </header>
  );
};

export default Header;

const PersonalAccount = ({name ='dear User', handleLogout}) => {
    return(
        <div className="header__personal-account">
        <p>Hi {name}!</p>
        <Link 
        to='/'
        className="header__logout"
        onClick={handleLogout}
        >Logout</Link>
        </div>
        
    )
}