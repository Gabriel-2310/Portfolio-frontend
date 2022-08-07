import React from 'react';
import a1 from "../../Tool/Images/1.jpg";
import a2 from "../../Tool/Images/2.jpg";
import a3 from "../../Tool/Images/3.jpg";
import a4 from "../../Tool/Images/4.jpg";
import a5 from "../../Tool/Images/5.jpg";
import a6 from "../../Tool/Images/6.jpg";
import "./index.css";


const Proyects = () => {
  return (
    <div className='ContainerMain'>
      <div className='ContainerMaster'>
        <div className="hero">
          <h1>Mis proyectos</h1>
        </div>
        <div className="container">
          <div className="evento">
            <div className="foto" data-aos="fade-up">
              <img src={a1} alt="" />
            </div>
            <h3 className="fecha">9 de Enero de 2021</h3>
          </div>
          <div className="evento">
            <div className="foto" data-aos="fade-down">
              <img src={a2} alt="" />
            </div>
            <h3 className="fecha">3 de Febrero de 2021</h3>
          </div>
          <div className="evento">
            <div className="foto" data-aos="fade-left">
              <img src={a3} alt="" />
            </div>
            <h3 className="fecha">7 de Junio de 2022</h3>
          </div>
          <div className="evento">
            <div className="foto" data-aos="fade-right">
              <img src={a4} alt="" />
            </div>
            <h3 className="fecha">18 de Agosto de 2023</h3>
          </div>
          <div className="evento">
            <div className="foto" data-aos="fade-up">
              <img src={a5} alt="" />
            </div>
            <h3 className="fecha">26 de Noviembre de 2024</h3>
          </div>
          <div className="evento">
            <div className="foto" data-aos="fade-up">
              <img src={a6} alt="" />
            </div>
            <h3 className="fecha">7 de Diciembre de 2021</h3>
          </div> 
        </div>
      </div>
    </div>
  )
};

export default Proyects;