import React from 'react';
import { NavLink } from "react-router-dom";
import "./index.css";

const About = () => {

  const About = {
    container: [`Desde pequeño he sido curioso, enfocado en obtener buenos resultados, 
    intrigado por todo los procesos que pasan a mi alrededor, y apasionado por los grandes retos, 
    lo que facilito mi crecimiento y desarrollo; demostre interes en areas que necesiten logica o razonamiento 
    como matematicas y tecnologia.`,
      `Ralice estudios enfocados en el area agroindustrial y control de calidad, 
    ademas de que tuve la oportunidad de vivenciar la vidad militar donde aprendi disciplina y constancia;
    estas y otras vivencias me dieron un vision mas amplia del panorama, capacidades de adaptarme a cualquier entorno, 
    y muchas habilidades que incrementaron mi valor como profesional.`,
      `Actualmente cambie mi enfoque a una area que me 
    llama mucho la atencion por sus exigencias que encajan en mis fortalezas y gustos, dia tras dia me apasiono mas 
    por la programacion que me da la facilidad de aprender y mejorar continuamente.
    El proceso de aprender y practicar es una experiencia extrardinaria llena de desafios, frustracion y logros,
    donde creas fuertes relaciones con tus colegas al pasar gratos momentos trabajando en equipo.`,
      "¿Quieres saber más sobre mí? ¡contáctame!"
    ]
  }
  return (
    <div className='ContainerMain'>
      <div className='Containermaster'>
        <div className="hero">
          <h1>About</h1>
        </div>
        <div className="texto">
          {About.container && About.container.map((cont) => {
            return (
              <p>
                {cont}
              </p>
            )
          })}
        </div>
        <div className="button">
          <NavLink to={'/contact'}>
          <button>Ponte en contacto</button>
          </NavLink>          
        </div>
      </div>
    </div>
  )
};

export default About;