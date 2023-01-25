import React from 'react'
import CV from '../../archivos/cv.pdf'
import {useNavigate} from "react-router-dom";

const Cta = () => {
  const navigate = useNavigate();
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Descargar CV</a>
        <a href="" onClick={() => navigate(`/Contacto`)} className='btn btn-primary'>Contactarme</a>
    </div>
  )
}

export default Cta