import React from 'react';
import { NavLink } from "react-router-dom";
import "./index.css";

const Home = () => {
  return (
    <div className='ContainerMain'>
      <div className='ContainerMaster'>
        <h1>Home</h1>
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