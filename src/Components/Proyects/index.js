import React from 'react';
import { FaGithub, FaRocket } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import "./index.css";


const Proyects = () => {

  const proyects = [
    {
      img: [
        "https://m.eltiempo.com/uploads/2018/06/06/5b177c3b22c8e.jpeg", 
        "https://ilamdir.org/blobs/ilamdir/w300h300-cropped/328/2019/15/dia-del-cafe-eje-1.jpg", 
        "https://cdn.baquianos.com/img/blog/2021/21/-rpwx640.jpg", 
        "https://static3.depositphotos.com/1010238/267/i/950/depositphotos_2679371-stock-photo-cocora-valley-andean-colombia.jpg"
      ],
      titulo: "titulo 1",
      fecha: "9 de Enero de 2021",
      deploy: "https://manga-coffee.vercel.app/",
      descripcion: "descripcion uana asqigfia fiagfigefg qi fg qf agefiag efiga igaegfo",
      github: "https://github.com/NosliwKuns/MANGA-COFFEE"
    },
    {
      img: [
        "https://asset1.zankyou.com/images/mag-post/816/336b/685//-/co/wp-content/uploads/2017/05/Ca%C3%B1o-Cristales-Kirill-Trubitsyn.jpg",
        "https://locuraviajes.com//wp-content/uploads/2012/04/rio-cristales12_thumb.jpg",
        "https://locuraviajes.com//wp-content/uploads/2012/04/Rocket_Laguna_del_Cocuy_16259.jpg",
        "https://media.istockphoto.com/photos/the-view-from-the-sierra-nevada-of-santa-marta-picture-id1041384388?k=20&m=1041384388&s=612x612&w=0&h=ptcuKWscMgNxNSCbXih1pzgpjbzp0p20OG4S1wGzfRQ=",
      ],
      titulo: "titulo 2",
      fecha: "26 de junio de 2011",
      descripcion: "descripcion uana asqigfia fiagfigefg qi fg qf agefiag efiga igaegfo",
      github: "https://github.com/Gabriel-2310"
    },
    {
      img: [
        "https://tipsparatuviaje.com/wp-content/uploads/2019/03/colombia-pais.jpg",
        "https://www.susmedicos.com/Fotografias/guacamaya-750.jpg",
        "https://viajareacolombia.com/wp-content/uploads/2020/07/2_fotos.jpg",
        "https://www.kienyke.com/sites/default/files/styles/interna_destacada_s/public/2020-07/Valle-de-Cocora-Salento-Colombia.jpg?itok=DbTBDr48"
      ],
      titulo: "titulo 3",
      fecha: "13 de Febrero de 2015",
      descripcion: "descripcion uana asqigfia fiagfigefg qi fg qf agefiag efiga igaegfo",
      github: "https://github.com/Gabriel-2310/VideoGames-PI"
    }
  ]
  return (
    <div className='ContainerMain'>
      <div className='Containermaster'>
        <div className="hero">
          <h1>Mis proyectos</h1>
        </div>
        <div className="container">
          {
            proyects && proyects.map((element) => {
              return (
                <div className="evento">
                  <div className="foto" >
                    <div className='slider'>
                      <ul>
                        {
                          element.img && element.img.map((img) =>{
                            return (
                              <li>
                                <img src={img} alt="" />
                              </li>
                            )
                          })
                        }
                      </ul>
                    </div>                    
                  </div>
                  <div className="fecha">
                    <div className='titulo'>
                      <h3 >{element.titulo}</h3>
                    </div>
                    <p>{element.descripcion}</p>
                    <div className='infofooter'>
                      <p>{element.fecha}</p>
                      <div className='linkinfo'>
                        {element.deploy &&
                          <a href={element.deploy} target="blank">
                            < FaRocket />
                          </a>
                        }
                        <a href={element.github} target="blank">
                          < FaGithub />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>)
            }) 
          }
        </div>
        <div className="button">
          <NavLink to={'/about'}>
          <button>Conoce mas sobre mi</button>
          </NavLink>          
        </div>
      </div>
    </div>
  )
};

export default Proyects;