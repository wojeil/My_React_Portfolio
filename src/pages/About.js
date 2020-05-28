import React from "react";
import "./HomeP.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Me from "../images/me.JPG";
import "./About.css"
import Badge from "../images/badge.jpg";


function About() {

    return (
        <>
            <div className="aboutBack">
                <Nav />
            </div>

            <div className="container-fluid" id="container">
                <div className="row">
                    <div className="col-sm-3 col-border" >
                        <div className="row">
                            <div className="col-sm-12">
                                <div id="side"> <a href="https://badgr.com/backpack/badges" target="_blank" rel="noopener noreferrer"><img id="badge" src={Badge} alt="UCF CODING BOOTCAMP Badge"/></a></div>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-9">
                        {/* firstrow */}
                        <div className="row">

                            <div className="col-sm-4" >
                                <div className="container">
                                    <img className="teamwork" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwCJuM5HipSTBnxcFZPnzSV5TDN7-7NTPXu3eKhQgl7-GEUPJ8&usqp=CAU" alt="teamwork" />
                                    <div className="overlay">TeamWork</div>
                                </div>
                            </div>

                            <div className="col-sm-4" >
                                <div className="container">
                                    <img className="leader" src="https://blog.smarp.com/hs-fs/hubfs/leadership-qualities.png?width=1486&name=leadership-qualities.png" alt="leadership" />
                                    <div className="overlay">LeaderShip</div>
                                </div>
                            </div>

                            <div className="col-sm-4" >
                                <div className="container">
                                    <img className="time" src="https://www.theladders.com/wp-content/uploads/time_190405-800x450.jpg" alt="time management" />
                                    <div className="overlay">Time Management</div>
                                </div>
                            </div>
                        </div>
                        {/* secondrow */}
                        <div className="row">
                            <div className="col-sm-12">
                                <h1 id="main">About Me</h1>
                                <hr />
                            </div>
                        </div>
                        {/* thirdrow */}
                        <div className="row">
                            <div className="col-7">
                                <div className="card " id="aboutCard">
                                    <p id="aboutText">Full stack developer and a former Deputy Sheriff with experience and passion in front end and back end coding development.  A certificate in full stack web development from the University of Central Florida with a deep knowledge in Java Script, HTML, CSS, MySQL, MongoDb, IndexDb, PWA, Node.js, REACT, Bootstrap and Bulma Framework. Enjoy problem-solving and puzzles. I believe teamwork and collaboration will tend to greater results. In my Boot Camp I have been entrusted to take the lead as a project manager for all my group projects due to my leadership skills from my previous career and my knowledge referencing the material covered. Highly trained to produce results in stressful situations and take necessary action required to complete tasks. Always looking to expand my knowledge in the field. Excited to apply my interpersonal skills and coding skills to maintain and build new technologies. Nothing compares to the satisfaction of watching my web application being applied in Users’ daily life.</p>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <img id="imageMe" src={Me} alt="My Pic" className="img-thumbnail" />
                            </div>
                        </div>

                    </div>
                </div>

                <Footer />

            </div>

        </>

    )
}

export default About