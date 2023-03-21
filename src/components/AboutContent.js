import "./AboutContentStyles.css";
import React from 'react'
import profileimg from "../assets/profileimg.jpg"
import reactimg from "../assets/img/icons/react.png"
import Javaimg from "../assets/img/icons/java.png"
import htmlimg from "../assets/img/icons/html.png"
import javscripttimg from "../assets/img/icons/javascript.png"
import pythonimg from "../assets/img/icons/python.png"
import cssimg from "../assets/img/icons/css.png"
import mysqlimg from "../assets/img/icons/mysql.png"
import nodeimg from "../assets/img/icons/node-js.png"

const AboutContent = () => {
    return (
        <div className="About-container">
            <div className="about-content">
                <div className="profile-img">
                    <h5>ABOUT</h5>
                    <h2>LEARN MORE ABOUT ME</h2>
                    <img className="pro-img" src={profileimg} alt="profileimg" />
                </div>
                <div className="content">
                    <h2 className="title">Software Engineer</h2>
                    <div className="about">
                        <p>A Software Engineer, Self-led learner and team player with a passion for building products. I am a person with clear
goals to achieve and will work for them no matter what.</p>
                            </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <ul>
                                    <li><i ></i> <strong>Birthday:</strong> <span>11 Feb 2003</span></li>
                                    <li><i ></i> <strong>Website:</strong> <a href="https://github.com/vaibhavsharma1379"> <span>https://github.com/vaibhav...</span></a></li>
                                    <li><i ></i> <strong>Phone:</strong> <span>+91 7668869669</span></li>
                                    <li><i ></i> <strong>City:</strong> <span>Bareilly, Uttar Pradesh, India</span></li>
                                </ul>
                            </div>
                            <div class="col-lg-6">
                                <ul>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>21</span></li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>B.TECH (4rdYear)</span></li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Mail:</strong><span>vaibhavsrh78@gmail.com</span></li>
                                </ul>
                            </div>
                        
                    </div>
                    <div className="footer-about"><p>I am pursuing my Bachelors degree in Engineer from Krishna Engineering College, Ghaziabad. And I am a Software Engineer with basic knowledge of mobile and web development technologies such as Flutter,
Android Studio, Firebase, React, HTML, CSS and JavaScript. Intermediate knowledge of Java and SQL
with understanding of DBMS and Data Structures and Algorithms. Holds certifications in Java (HackerRank) and Python (IIT Kanpur).</p></div>
            <div className="interests-section">
                    <div className="section-title">
                        <h2 className="int-title">Technologies I Know</h2>
                    </div>
                 <div className="tech-row">
                 <div class="icon-box">
            <img src={Javaimg} width="30px"/>
            <h3 className="tech-name">Java</h3>
          </div>
                    <div class="icon-box">
            <img src={pythonimg} width="30px"/>
            <h3 className="tech-name">Python</h3>
          </div>
          
          
          <div class="icon-box">
            <img src={javscripttimg} width="30px"/>
            <h3 className="tech-name">JavaScript</h3>
          </div>
          <div class="icon-box">
            <img src={mysqlimg} width="30px"/>
            <h3 className="tech-name">MySql</h3>
          </div>
          <div class="icon-box">
            <img src={htmlimg} width="30px"/>
            <h3 className="tech-name">Html</h3>
          </div>
          <div class="icon-box">
            <img src={cssimg} width="30px"/>
            <h3 className="tech-name">Css</h3>
          </div>
          <div class="icon-box">
            <img src={nodeimg} width="30px"/>
            <h3 className="tech-name">Node js</h3>
          </div>
          <div class="icon-box">
            <img src={reactimg} width="30px"/>
            <h3 className="tech-name">React</h3>
          </div>
                    </div> 
                </div> 
                </div>
            </div>
        </div>
    )
}

export default AboutContent