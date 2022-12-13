import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo-basic.svg';
import logoMobile from '../assets/logo-mobile.svg'

function Header() {

    return (
    <div className='headerContainer'>
            <Link to="/home">
                <img className='largeLogo' src={logo} alt='Logo Kasa'/>
                <img className='smallLogo' src={logoMobile} alt='Logo Kasa'/>
            </Link>
            <nav>
                <NavLink 
                    className='nav-link'
                    style={({isActive}) => {
                        return {
                            textDecoration: isActive ? "underline" : "none"
                        } 
                    }}
                    to="/home"
                >
                    Accueil
                </NavLink>
                <NavLink 
                    className='nav-link'
                    style={({isActive}) => {
                        return {
                            textDecoration: isActive ? "underline" : "none"
                        } 
                    }} 
                    to="/about"
                >
                    A Propos
                </NavLink>
            </nav>
    </div>
    )
}

export default Header;