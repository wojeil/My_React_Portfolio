import React from "react";
import "./HomeP.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";





function Home() {
    return (
        // <Design>
        <div className="homeBack">
            {/* // <!-- first page section --> */}


            <Nav />

            <div className="container">
                {/* <!--row 1 has one column--> */}
                <div className="row">
                    <div className="col-sm-12">
                        <h1 id="main">About Me</h1>
                        <hr />
                    </div>
                </div>
                {/* <!--row 2 has two columns--> */}
                <div className="row">
                    {/* <!--col 1 contains image--> */}
                    <div className="col-sm-3">

                        <img src="../../images/me.JPG" alt="My Pic" className="img-thumbnail" />
                    </div>
                    {/* <!--col 2 contains Text--> */}
                    <div className="col-sm-9">
                        <div className="card about-card">
                            <p className="about-text">Full stack developer and a former Deputy Sheriff with experience and passion in front end and back end coding development.  A certificate in full stack web development from the University of Central Florida with a deep knowledge in Java Script, HTML, CSS, MySQL, MongoDb, IndexDb, PWA, Node.js, REACT, Bootstrap and Bulma Framework. Enjoy problem-solving and puzzles. I believe teamwork and collaboration will tend to greater results. In my Boot Camp I have been entrusted to take the lead as a project manager for all my group projects due to my leadership skills from my previous career and my knowledge referencing the material covered. Highly trained to produce results in stressful situations and take necessary action required to complete tasks. Always looking to expand my knowledge in the field. Excited to apply my interpersonal skills and coding skills to maintain and build new technologies. Nothing compares to the satisfaction of watching my web application being applied in Users’ daily life.</p>
                        </div>
                    </div>

                </div>
                {/* <!--row 3 has one column--> */}
                <div className="row">
                    {/* <!--col 1 contains text--> */}
                    <div className="col-sm-12">

                    </div>
                </div>

            </div>
            <Footer className="aboutFooter" />

        </div>
        // </Design>
    );

}

export default Home