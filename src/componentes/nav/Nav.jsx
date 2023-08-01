import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useNavigate} from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <li onClick={() => navigate(`/`)}> <AiOutlineHome/></li>
      <li onClick={() => navigate(`/SobreMi`)}> <AiOutlineUser/></li>
      <li onClick={() => navigate(`/Experiencia`)}> <BiBook/></li>
      <li onClick={() => navigate(`/Portfolio`)}> <RiServiceLine/></li>
      <li onClick={() => navigate(`/Contacto`)}> <BiMessageSquareDetail/></li>
    </nav>
  )
}

export default Nav