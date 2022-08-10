import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import "./index.css";

const Navbar = () => {
    const [show, setshow] = useState(false);

    function Show(e) {
        e.preventDefault();
        show ? setshow(false) : setshow(true)
    }

    return (
        <header>
            <nav className='menu'>
                <label className='logo'>LuisGabriel</label>
                <ul className={show ? "show menu-items" : 'menu-items'}>
                    <li>
                    <NavLink to={'/home'} style={{textDecoration:"none"}}><p className='active'>home </p></NavLink>
                    </li>
                    <li>
                    <NavLink to={'/proyects'} style={{textDecoration:"none"}}><p >Proyects</p></NavLink>
                    </li>
                    <li>
                    <NavLink to={'/contact'} style={{textDecoration:"none"}}><p >Contact</p></NavLink>
                    </li>
                    <li>
                    <NavLink to={'/about'} style={{textDecoration:"none"}}><p>About</p></NavLink>
                    </li>
                </ul>
                <span onClick={Show} className='btn-menu'>
                    < FaBars />
                </span >
            </nav>
        </header>
    )
};

export default Navbar;