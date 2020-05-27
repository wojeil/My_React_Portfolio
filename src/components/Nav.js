import React from "react";
import "./nav.css"

function Nav() {

    return (

        <nav className="navbar navbar-light">
       
       
        {/* <!--Nav Items have been linked--> */}
        <ul className="nav">
            <li>
                <a  className="nav-link" href="/">About</a>
            </li>
            <li>
                <a className="nav-link" href="/portfolio">Portfolio</a>
            </li>
            <li>
                <a className="nav-link" href="/contact">Contact</a>
            </li>

        </ul>
    </nav>



    )



}

export default Nav;