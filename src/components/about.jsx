import './../index.css';
import profile from './../assets/img/prof-pic@2x.png';

function About () {
    return (
        <div className="about">
            <img src={profile} className="about__img" alt="profile" />
            <div className="about__info">
                <h2 className="about__title">Acerca de mi</h2>
                <p className="about__text">Hola! mi nombre es Yusting (Yuxin para los amigos) y tengo una gran afinidad hacía el trabajo colaborativo, me gusta crear diseños que inspiren e involucren a las personas. Como diseñador UI, considero que un buen producto no solo brinda una solución sino que permite crear una experiencia emocional en las personas que lo usan. <br/> En mi proceso creativo utilizo herramientas como Figma, Adobe XD, Photoshop e Illustrator que me ayudan en el flujo de trabajo para la producción de interfaces de usuario.</p>
                <button className="about__btn">Mas acerca de mi</button>
            </div>
        </div>
    );
}
export default About;