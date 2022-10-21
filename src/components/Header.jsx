import './Header.css';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import logoMobile from '../assets/logoMobile.svg'

function Header() {

    return (
    <div className='headerContainer'>
        <div className='logo'>
            <img src={logo} alt='Logo Kasa'/>
            <img src={logoMobile} alt='Logo Kasa'/>
        </div>
        <div>
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
    </div>
    )
}

export default Header;