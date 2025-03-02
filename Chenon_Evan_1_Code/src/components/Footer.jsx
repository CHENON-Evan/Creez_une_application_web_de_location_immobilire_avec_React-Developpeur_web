import logo from "../assets/logo-footer.png";
import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <img src={logo} alt='kasa logo' className='logo'/>
            <div className="footer__copyright"><span>© 2020 Kasa. All rights reserved</span></div>
        </div>
    );
}

export default Footer;