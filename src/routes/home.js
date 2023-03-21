import React from "react";
import Navbar from "../components/Navbar";
import Heroimg from "../components/Heroimg"
import Footer from "../components/Footer";
import Work from "../components/work";
import About from "../components/AboutContent"
import Form from "../components/Form";
const Home=() => {
    return (
        <div>
            <Navbar />
            <Heroimg/>
            <Work/>
            <About/>
            <Form/>
            <Footer />
        </div>
        )
}

export default Home;