import "./NavbarStyles.css"
import {FaBars, FaTimes} from "react-icons/fa"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { hover } from "@testing-library/user-event/dist/hover"
import resume from "../assets/img/icons/resume.pdf"
const Navbar = () => {
    const [click,setclick]=useState(false);
    const handleClick=()=>setclick(!click);

    const [color,setcolor]=useState(false);
    const changeColor=()=>{
        if(window.scrollY>=100){
            setcolor(true);
        }
        else{
            setcolor(false);
        }
    };
    window.addEventListener("scroll",changeColor);
  return (
    <div className={color? "header header-bg":"header"}>
       <Link to="/">
        <h1 className="portfolio">Portfolio</h1>
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
        <li>
         <div class="fadedown-enter-done"><a class="resume-button" href={resume} target="_blank" rel="noopener noreferrer">Resume</a></div>
        </li>
       </ul>
       <div className="hamburger" onClick={handleClick}>
        {click ?(<FaTimes size={20} style={{color:"#fff"}}/>):(<FaBars size={20} style={{color:"#fff"}}/>)}
        
        
       </div>
    </div>
  )
}

export default Navbar