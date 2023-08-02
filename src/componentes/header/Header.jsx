import React from 'react'
import './header.css'
import YO from '../../archivos/yo.png'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import CV from '../../archivos/cv.pdf'
import {useNavigate} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <section className="header">
      <div className="container header__container">
        <h5>Hola, yo soy</h5>
        <h1>Emmanuel Duarte</h1>
        <h5 className="text-light">Frontend Developer</h5>
        
        <div className="cta">
          <a href={CV} download className="btn">
            Descargar CV
          </a>
          <p onClick={() => navigate(`/Contacto`)} className="btn btn-primary">
            Contactarme
          </p>
        </div>

        <div className="header__social">
          <a href="https://www.linkedin.com/in/emmanuel-duarte-ab2a3a1b8/">
            <BsLinkedin />
          </a>
          <a href="https://github.com/emmaduarte">
            <FaGithub />
          </a>
        </div>

        <div className="yo">
          <img src={YO} alt="Yo" />
        </div>

        {/*<a href="#contact" className='scroll__down'>Deslizar abajo</a>*/}
      </div>
    </section>
  );
}

export default Header