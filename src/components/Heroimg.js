import "./HeroimgStyles.css";
import IntoImg from "../assets/introimg.jpg";
import React from 'react'
import { Link } from "react-router-dom";

export const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntoImg} alt="IntoImg" />

        </div>
        <div className="content">
            <p>Hi, I'M A STUDENT.</p>
            <h1>Software Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn-light">Contacts</Link>

            </div>
        </div>
    </div>
  )
}
export default Heroimg;