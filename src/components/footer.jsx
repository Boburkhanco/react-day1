import './../index.css';
import logo from './../assets/img/Logo.svg';
import link1 from './../assets/img/Behance.svg';
import link2 from './../assets/img/Figma.svg';
import link3 from './../assets/img/Linkedin.svg';

function Footer () {
    return (
        <div className="footer">
            <img src={logo} className="footer__logo" alt="logo" />
            <ul className="footer__info">
                <li className="footer__info-item"><a href="#" className="footer__info-l link-y">Inicio</a></li>
                <li className="footer__info-item"><a href="#" className="footer__info-l">Acerca de mi</a></li>
                <li className="footer__info-item"><a href="#" className="footer__info-l">Proyectos</a></li>
            </ul>
            <ul className="footer__contact">
                <li className="footer__contact-item"><a href="#" className="footer__contact-l link-y">Contáctame</a></li>
                <li className="footer__contact-item"><a href="#" className="footer__contact-l">Correo</a></li>
                <li className="footer__contact-item"><a href="#" className="footer__contact-l">LinkedIn</a></li>
            </ul>
            <ul className="footer__social">
                <li><a href="#" className="footer__social-item link-y">Social</a></li>
                <div className="footer__social-links">
                    <a href="#"><img src={link1} alt="" className="footer__social-link" /></a>
                    <a href="#"><img src={link2} alt="" className="footer__social-link" /></a>
                    <a href="#"><img src={link3} alt="" className="footer__social-link" /></a>
                </div>
            </ul>
        </div>
    );
}
export default Footer;