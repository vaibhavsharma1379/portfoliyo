import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import AboutContent from "../components/AboutContent";
const about=()=>{
    return(
        <div>
            <Navbar/>
            <Heroimg2 heading="ABOUT." text="Im a friendly Software Developer."/>
            <AboutContent/>
            <Footer/>
        </div>
    )
}
export default about;