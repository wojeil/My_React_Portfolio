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
                                    <img className="teamwork" src="https://blog.vantagecircle.com/content/images/2019/05/teamwork-and-team-building.png" alt="teamwork" />
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
                                    <p id="aboutText">Full stack developer and a former Deputy Sheriff with experience and passion in front and back end development. A deep knowledge in Java Script, HTML, CSS, MySQL, MongoDb, IndexDb, PWA, Node.js, REACT, Bootstrap and Bulma Framework. Adept at taking challenges and solving problems with demonstrated leadership trough team building and people skills. Highly trained to produce results in stressful situations and take necessary actions required to complete tasks. My passion is to create something that people interact with, use, touch and love in their daily life through coding and building new technologies.</p>
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