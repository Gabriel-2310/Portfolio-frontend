import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import "./index.css";

const Navbar = () => {
    const [show, setshow] = useState(false);

    function Show (e){
        e.preventDefault();
        show? setshow(false) : setshow(true)         
      }
      
    return (
        <header>
            <nav className='menu'>
                <label className='logo'>LuisGabriel</label>             
                <ul className={show? "show menu-items":'menu-items'}>
                    <li><a className='active' href='/home'>home </a></li>
                    <li><a href="/proyects">Proyects</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
                <span  onClick={Show} className='btn-menu'>
                    < FaBars /> 
                </span >              
            </nav>            
        </header>
    )
};

export default Navbar;