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
      <a href="" onClick={() => navigate(`/`)}> <AiOutlineHome/></a>
      <a href="" onClick={() => navigate(`/SobreMi`)}><AiOutlineUser/></a>
      <a href="" onClick={() => navigate(`/Experiencia`)}><BiBook/></a>
      <a href="" onClick={() => navigate(`/Portfolio`)}><RiServiceLine/></a>
      <a href="" onClick={() => navigate(`/Contacto`)}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav