import React from 'react'
import './experiencia.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experiencia = () => {
  return (
    <section id='experiencia'>
      <h5>Que habilidades tengo</h5>
      <h2>Mi experiencia</h2>

      <div className="container experiencia_container">
        <div className="experiencia_frontend">
          <h3>Desarrolador Frontend</h3>
          <div className="experiencia_contenido">
            <article className='experiencia_detalles'>
              <BsPatchCheckFill className='experiencia_detalles-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experiencia_detalles'>
              <BsPatchCheckFill className='experiencia_detalles-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experiencia_detalles'>
              <BsPatchCheckFill className='experiencia_detalles-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experiencia_detalles'>
              <BsPatchCheckFill className='experiencia_detalles-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experiencia_detalles'>
              <BsPatchCheckFill className='experiencia_detalles-icon'/>
              <div>
                <h4>Material UI</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experiencia_detalles'>
              <BsPatchCheckFill className='experiencia_detalles-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
          </div>
        </div>
        {/*<div className="experiencia_backend">

        </div>*/}
      </div>
      
    </section>
  )
}

export default Experiencia