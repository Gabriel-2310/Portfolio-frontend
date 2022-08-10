import React from 'react';
import { NavLink } from "react-router-dom";
import "./index.css";

const Welcome = () => {
  return (
    <div className='ContainerMain'>
      <div className='ContainerMaster'>
        <h1>Welcome</h1>
        <NavLink to={'/proyects'}>
          <button>Conoce mis proyectos</button>
        </NavLink>
      </div>
    </div>
  )
};

export default Welcome;