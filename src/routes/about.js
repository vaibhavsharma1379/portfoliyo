import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
const about=()=>{
    return(
        <div>
            <Navbar/>
            <Heroimg2 heading="ABOUT." text="Im a friendly Software Developer."/>
            <Footer/>
        </div>
    )
}
export default about;