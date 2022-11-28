import React from 'react'
import './SobreMi.css'
import Yo from '../../archivos/yo2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='sobreMi'>
      <h5>Lo que debes saber</h5>
      <h2>Sobre Mi</h2>

      <div className='container sobremi__container'>
        <div className="sobre__mi">
          <div className="sobre__mi-image">
            <img src={Yo} alt='Sobre mi Imagen'></img>
          </div>
        </div>

        <div className="sobre__content">
          <div className="sobre__cards">
            <article className='sobre__card'>
            <FaAward className='sobre__icon'/>
              <h5>Experiencia</h5>
              <small>Trabajos particulares en proyectos</small>
            </article>
          
          
            <article className='sobre__card'>
            <FiUsers className='sobre__icon'/>
              <h5>Clientes</h5>
              <small>Varios rubros</small>
            </article>
          
          
            <article className='sobre__card'>
            <VscFolderLibrary className='sobre__icon'/>
              <h5>Proyectos</h5>
              <small>+4 pryectos</small>
            </article>
          </div>

          <p>
            Hola soy Emmanuel un estudiante de Programacion amante y apasionado por la tecnologia, la informatica y la Programacion.
            Mi nivel academico es 3er año en Tecnico Programador Universitario, con cursos de lenguajes como HTML, CSS, Javascript y React realizados en San Juan Tec.
            Actualmente me encuentro en desarrollo de paginas web por cuenta propia y en busqueda de un trabajo para poder formar parte de Proyectos mas grandes y desafiantes, 
            pudiendo aportar todos mis conocimientos y totalmente dispuesto a aprender lo que haga falta para poder desarrolar la tarea y dar mi aporte a la empresa.
          </p>

          <a href="/Contacto" className='btn btn-primary'>Contactame</a>

        </div>
      </div>
    </section>
  )
}

export default about