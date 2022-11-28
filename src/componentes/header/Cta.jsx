import React from 'react'
import CV from '../../archivos/cv.pdf'

const Cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Descargar CV</a>
        <a href="/Contacto" className='btn btn-primary'>Contactarme</a>
    </div>
  )
}

export default Cta