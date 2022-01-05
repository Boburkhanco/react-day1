import './../index.css';
// import profile from './../assets/img/prof-pic@2x.png';

function Info () {
    return (
        <div className="info">
            <h4 className="info__title">Mis habilidades</h4>
            <div className="info__boxes">
                <div className="info__box">
                    <h4 className="info__box-title">Responsive design</h4>
                    <p className="info__box-text">Con mi experiencia en patrones de diseño responsive tengo una visión clara acerca de como implementarlos de manera efectiva en cualquier proyecto.</p>
                </div>
                <div className="info__box">
                    <h4 className="info__box-title">Sistema de diseño</h4>
                    <p className="info__box-text">Tengo manejo de sistemas de diseño, lo cual permite agilidad en el proceso de diseño acortando los tiempos en la creación de las interfaces dentro del proyecto.</p>
                </div>
                <div className="info__box">
                    <h4 className="info__box-title">Cooworking</h4>
                    <p className="info__box-text">Trato de ser un activo valioso en el equipo que esté trabajando, aportando mis conocimientos y material que optimice el flujo de trabajo en el desarrollo del proyecto.</p>
                </div>
            </div>
            <button className="info__btn btn-y">Ver más de mis skills</button>
        </div>
    );
}
export default Info;