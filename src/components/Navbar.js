import "./NavbarStyles.css"
import {FaBars, FaTimes} from "react-icons/fa"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { hover } from "@testing-library/user-event/dist/hover"

const Navbar = () => {
    const [click,setclick]=useState(false);
    const handleClick=()=>setclick(!click);
  return (
    <div className="header">
       <Link to="/">
        <h1>Portfolio</h1>
       </Link>
       <ul className={click ? "nav-menu active" :"nav-menu"}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/project">Project</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
       </ul>
       <div className="hamburger" onClick={handleClick}>
        {click ?(<FaTimes size={20} style={{color:"#fff"}}/>):(<FaBars size={20} style={{color:"#fff"}}/>)}
        
        
       </div>
    </div>
  )
}

export default Navbar