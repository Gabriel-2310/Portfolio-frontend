import React from 'react';
import { NavLink } from "react-router-dom";
import { FaLinkedin } from 'react-icons/fa';
import "./index.css";

const Home = () => {
  const skills = [
    "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    "https://cdn-icons-png.flaticon.com/512/3334/3334886.png",
  ]

  return (
    <div className='ContainerMain'>
      <div className='Containermaster'>
        <div className="hero">
          <h1>Luis Gabriel Valencia Morales</h1>
          <p>Full Stack Developer</p>
        </div>
        <div className='contenedorhome'>
          <div className='infohome'>
            <p>Bienvenido a mi portafolio</p>
            <br />
            <p>Soy un apasionado por programar, aprender y afrontar nuevos retos.
              Disfruto del trabajo en equipo en especial el mulicultural.</p>
            <br />
            <p>Actualmente estoy mejorando mis conocimientos de forma autodidacta
              y conociendo nuevas tecnologias a travez de cursos, diplomados etcetera;
              me gusta mantener en constante aprendizaje y mejoramiento continuo.</p>
            <br />
            <p>No dudes en ponerte en contacto conmigo, me gusta socializar, compartir y aprender con las personas.</p>
            <br />
            <p>Te comparto mi CV, y quedo al pendiente de tus comentarios</p>
            <br />
            <a className="button" id='butonCV' style={{ textDecoration: "none" }} href="https://drive.google.com/file/d/1E5UQus6OIRA9Z8iSi1R3CbbW_6bQNWRR/view?usp=sharing" target="blank">
              <button>< FaLinkedin /> curriculum vitae</button>
            </a>
          </div>
          <div className='skillhome'>
            <div className="hero" id='subtituloskill'>
              <p>Tecnologias</p>
            </div>
            <div className='contenedorskill'>
              {
                skills && skills.map((img) => {
                  return (
                    <div className='cardskills'>
                      <img src={img} alt="" typeof='image/png'/>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="button">
          <NavLink to={'/proyects'}>
            <button>Conoce mis proyectos</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
};

export default Home;