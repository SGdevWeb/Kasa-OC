import './Footer.css';
import logo from '../assets/logoFooter.svg';

function Footer() {
    return(
    <div className='footerContainer'>
        <img src={logo} alt='logo kasa'/>
        <p>
        <i className="fa-regular fa-copyright"></i>
        {new Date().getFullYear()} Kasa. All rights reserved
        </p>
    </div>
    )
}

export default Footer;