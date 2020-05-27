import React from "react";
import "./nav.css"

function Nav() {

    return (

        <nav className="navbar navbar-light">
        <span className="navbar-brand  h1 ">
            <p className="name">WO</p>
        </span>
        {/* <!--Nav Items have been linked--> */}
        <ul className="nav">
            <li className="nav-item">
                <a className="nav-link" href="/">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
            </li>

        </ul>
    </nav>



    )



}

export default Nav;