import "./FooterStyles.css"

import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem", }} />
                        <div>
                            <p>Mohan Nagar, Ghaziabad</p>
                            <p>Uttar Pradesh</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem", }} />
                            +91 766-886-9669
                            </h4>
                    </div>
                    <div className="email">
                        <h4><a href="mailto:vaibhavsrh78@gmail.com" >
                        <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem", }} />
                            vaibhavsrh78@gmail.com
                        </a>
                        </h4>
                    </div>
                </div>
                <div className="right">
                <h4>About the Company</h4>
                <p>This is me Vaibhav. I enjoy discussing new projets and design challeges</p>
                <div className="social">
                    <a href="https://www.instagram.com/vaibhav___1379/"><FaInstagram
                        size={20}
                        style={{  marginRight: "1rem", }}/></a>
                    <a href="https://www.facebook.com/profile.php?id=100034631649716"><FaFacebook
                        size={20}
                        style={{  marginRight: "1rem", }} /></a>
                    <a href="https://www.linkedin.com/in/vaibhav-49abb4190/">
                    <FaLinkedin
                        size={20}
                        style={{marginRight: "1rem", }} />
                    </a>
                    <a href="https://github.com/vaibhavsharma1379">
                    <FaGithub
                        size={20}
                        style={{  marginRight: "1rem", }} />
                    </a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer