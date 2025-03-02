import logo from '../assets/logo.png';
import Nav from "./Nav";
import '../styles/Header.css';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="Kasa logo" className="logo" />
      </Link>
      <Nav/>
    </div>
  );
}

export default Header;
