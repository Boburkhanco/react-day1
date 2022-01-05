import './../index.css';

function Intro () {
    return (
        <div className="intro">
            <h1 className="intro__title">
                Soy <span className="intro__title-yellow">Yusting Mora</span> Diseñador UI/UX
            </h1>
            <p className="intro__content">Este es mi portafolio y CV hecho en Figma, acá puedes ver mi estilo de prototipado a la hora de diseñar interfaces. <br/> ¡Espero te guste!</p>
            <div className="intro__btns">
                <button className="intro__submit btn-y">Ver proyectos</button>
                <button className="intro__cv">Descargar CV</button>
            </div>
        </div>
    );
}
export default Intro;