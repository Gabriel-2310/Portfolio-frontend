import React from 'react';
import { NavLink } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagramSquare } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import "./index.css";

const Contact = () => {
  const contact = {
    facebbok: "",
    Linkedin: "",
    github: "",
    instagram: "",
    gmail: "",

  }
  return (
    <div className='ContainerMain'>
      <div className='Containermaster'>
        <div className="hero">
          <h1>Contacto</h1>
        </div>
        <div className="contact">
          <div className="contactformulario">
            <div className='titulo'>
              <h3>Dejame tu comentario</h3>
            </div>
            <input name="name" placeholder="Nombre" />
            <input name="direccion" placeholder="Direccion" />
            <div className='datoscontact'>
              <input name="email" placeholder="Email" />
              <input name="telefono" placeholder="Telefono" />
            </div>
            <input name="asunto" placeholder="Asunto" />
            <input id='mensaje' name="mensaje" placeholder="Escribe tu mensaje aqui..." />
            <p id='agradecimiento'>¡Gracias por tu mensaje!</p>
            <div className="button">
              <NavLink to={'/home'}>
                <button>Enviar</button>
              </NavLink>
            </div>
          </div>
          <div className="contactlink">
            <div  id='contactame' className='titulo'>
              <h3>Sientete libre de contactarme</h3>
            </div>
            <a href={contact.Linkedin} target="blank">
              < FaLinkedin />
            </a>
            <a href={contact.facebbok} target="blank">
              < FaFacebook />
            </a>
            <a href={contact.instagram} target="blank">
              < FaInstagramSquare />
            </a>
            <a href={contact.github} target="blank">
              < FaGithub />
            </a>
            <a href={contact.gmail} target="blank">
              < IoMail />
            </a>

          </div>
        </div>
        <div className="button">
          <NavLink to={'/home'}>
            <button>Inicio</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
};

export default Contact;