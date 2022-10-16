import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../assets/LOGO.svg';

function Header() {
    return (
    <div className='headerContainer'>
        <div>
            <img src={logo} alt='Logo Kasa'/>
        </div>
        <div>
            <nav>
                <Link className='nav-link' to="/">Accueil</Link>
                <Link className='nav-link' to="/about">A Propos</Link>
            </nav>
        </div>
    </div>
    )
}

export default Header;