import React from 'react';
import { NavLink } from "react-router-dom";
import "./index.css";

const Welcome = () => {
  return (
    <div className='ContainerMain'>
      <div className='ContainerMaster'>
        <div className='containerwelcom'>
          <div className='imagenwelcom'>
            <img src="https://eldiario.com/wp-content/uploads/2020/08/nomada-digital-destinos-6-1.jpg" alt="paisaje" />
          </div>
          <div className='infowelcom'>
            <h1>¡Bienvenidos!</h1>
            <br />
            <h4>"Para crear lo fantastico primero debes entender lo real"</h4>
            <p>Walt Disney</p>
          </div>
        </div>
        <div className="button">
          <NavLink to={'/home'}>
            <button>Iniciar</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
};

export default Welcome;