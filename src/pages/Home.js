import React from "react";
import "./HomeP.css";


import Footer from "../components/Footer";





function Home() {
    return (
        // <Design>
        <>
            {/* // <!-- first page section --> */}

           
                <nav className="navbar navbar-light">
                    <span className="navbar-brand  h1 ">
                        <p className="name">Wadih Ojeil</p>
                    </span>
                    {/* <!--Nav Items have been linked--> */}
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>

                    </ul>
                </nav>
           
              
            <Footer />
        </>
        // </Design>
    );

}

export default Home