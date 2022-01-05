import './../index.css';
import logo from './../assets/img/Logo.svg';

function Header () {
    return (
        <div className="header">
            <img src={logo} className="header__logo" alt="logo" />
            <ul className="header__menu">
                <li><a href="#" className="header__menu-item">Inicio</a></li>
                <li><a href="#" className="header__menu-item">Acerca de mi</a></li>
                <li><a href="#" className="header__menu-item">Proyectos</a></li>
            </ul>
            <button className="header__btn btn-y">Contáctame</button>
        </div>
    );
}
export default Header;
