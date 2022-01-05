import './../index.css';
import img1 from './../assets/img/Portafolio/img1.png';
import img2 from './../assets/img/Portafolio 2/img2.png';
import img3 from './../assets/img/Portafolio 3/img3.png';

function More () {
    return (
        <div className="more">
            <h1 className="more__title">Algunos de mis proyectos</h1>
            <div className="more__boxes">
                <img src={img1} alt="" className="more__img"  />
                <img src={img2} alt="" className="more__img" />
                <img src={img3} alt="" className="more__img" />
            </div>
            <button className="more__btn btn-y">Ver más en Behance</button>
        </div>
    );
}
export default More;