import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <ul className='lista'>
        <li><a href="/">Inicio</a></li>
        <li><a href="/Sobremi">Sobre Mi</a></li>
        <li><a href="/Experiencia">Experiencia</a></li>
        <li><a href="/Portfolio">Portfolio</a></li>
        <li><a href="/Contacto">Contacto</a></li>
      </ul>

      <div className="footer__sociales">
        <a href="https://www.linkedin.com/in/emmanuel-duarte-ab2a3a1b8/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/emmaduarte" target="_blank"><FaGithub/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Emmanuel Duarte. Todos los derechos reservados</small>
      </div>
    </footer>
  )
}

export default Footer