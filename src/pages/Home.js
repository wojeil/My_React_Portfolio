import React from "react";
import "./HomeP.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";






function Home() {
    return (
        <>
            <div className="homeBack">
                <div className="position"> </div>
                <h1 className="titlename">Wadih Ojeil</h1>
                <h2 className="title">Full-Stack Web Developer</h2>
                <Nav />
                <Footer/>
            </div>

        </>
    );

}

export default Home