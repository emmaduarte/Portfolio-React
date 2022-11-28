import React from 'react'
import './header.css'
import Cta from './Cta'
import YO from '../../archivos/yo.png'
import HeaderSociales from './HeaderSociales'

const Header = () => {
  return (
    
      <div className="container header__container">
        <h5>Hola, yo soy</h5>
        <h1>Emmanuel Duarte</h1>
        <h5 className='text-light'>Frontend Developer</h5>
        <Cta/>
        <HeaderSociales/>

        <div className="yo">
          <img src={YO} alt="Yo" />
        </div>

        {/*<a href="#contact" className='scroll__down'>Deslizar abajo</a>*/}
      </div>

    
  )
}

export default Header