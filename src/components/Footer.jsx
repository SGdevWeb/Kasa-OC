import './Footer.css';
import logo from '../assets/LOGOFOOTER.svg';

function Footer() {
    return(
    <div className='footerContainer'>
        <img src={logo} alt='logo kasa'/>
        <p>
        <i class="fa-regular fa-copyright"></i>
        2022 Kasa. All rights reserved
        </p>
    </div>
    )
}

export default Footer;