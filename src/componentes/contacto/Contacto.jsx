import React, { useRef } from 'react'
import './contacto.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import emailjs from 'emailjs-com'

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b52rrsj', 'template_islvqoe', form.current, 'uTZ2VQGz5BIu_brhV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id='contacto'>
      <h5>Ponte en contacto</h5>
      <h2>Contactame</h2>

      <div className="container contacto_container">
        <div className="contacto_opciones">
            <article className='contacto_opcion'>
              <MdOutlineEmail className='contacto_opcion-icono'/>
              <h4>Coreo</h4>
              <h5>emma.ale.duarte@gmail.com</h5>
              <a href="mailto:emma.ale.duarte@gmail.com" target="_blank">Enviar mensaje</a>
            </article>
            <article className='contacto_opcion'>
              <BsWhatsapp className='contacto_opcion-icono'/>
              <h4>Whatsapp</h4>
              <h5>+5492645656548</h5>
              <a href="https://api.whatsapp.com/send?phone=5492645656548" target="_blank">Enviar mensaje</a>
            </article>
            <article className='contacto_opcion'>
              <FaTelegramPlane className='contacto_opcion-icono'/>
              <h4>Telegram</h4>
              <h5>emmaDuarte14</h5>
              <a href="https://t.me/emmaDuarte14" target="_blank">Enviar mensaje</a>
            </article>
            
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nombre Completo' required/>
          <input type="email" name='email' placeholder='Correo' required/>
          <textarea name="message" rows="7" placeholder='Mensaje'></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
        </form>
      </div> 
    </section>
  )
}

export default Contacto