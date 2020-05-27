import React from "react";
import "./nav.css"
import { Link } from "react-router-dom";


function Nav() {

    return (

        <nav className="navbar">
        <Link className="nav-link h1 name" to="/">
            WO
        </Link>
        {/* <!--Nav Items have been linked--> */}
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
            </li>

        </ul>
    </nav>



    )



}

export default Nav;