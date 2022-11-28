import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSociales = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/emmanuel-duarte-ab2a3a1b8/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/emmaduarte" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSociales