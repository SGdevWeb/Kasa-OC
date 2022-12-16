import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo-basic.svg';
import logoMobile from '../assets/logo-mobile.svg'

function Header() {

    return (
    <div className='headerContainer'>
            <Link to="/">
                <img className='largeLogo' src={logo} alt='Logo Kasa'/>
                <img className='smallLogo' src={logoMobile} alt='Logo Kasa'/>
            </Link>
            <nav>
                <NavLink 
                    className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
                    end to="/"
                >
                    Accueil
                </NavLink>
                <NavLink 
                    className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
                    to="/about"
                >
                    A Propos
                </NavLink>
            </nav>
    </div>
    )
}

export default Header;