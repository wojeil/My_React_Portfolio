import React from "react";
import "./HomeP.css";
// import Nav from "../components/Nav";
// import Footer from "../components/Footer";
import Me from "../images/me.JPG";


function About () {

    return(
        <div className="container-fluid">
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

                            <img src={Me} alt="My Pic" className="img-thumbnail" />
                        </div>
                        {/* <!--col 2 contains Text--> */}
                        <div className="col-sm-6">
                            <img className="teamwork" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwCJuM5HipSTBnxcFZPnzSV5TDN7-7NTPXu3eKhQgl7-GEUPJ8&usqp=CAU" alt="teamwork" /> <img className="leader" src="https://blog.smarp.com/hs-fs/hubfs/leadership-qualities.png?width=1486&name=leadership-qualities.png" alt="leadership" /> <img className="time" src="https://www.theladders.com/wp-content/uploads/time_190405-800x450.jpg" alt="time management"/>
                        </div>

                    </div>
                    {/* <!--row 3 has one column--> */}
                    <div className="row">
                        {/* <!--col 1 contains text--> */}

                        <div className="col-sm">
                            <div className="card about-card">
                                <p className="about-text">Full stack developer and a former Deputy Sheriff with experience and passion in front end and back end coding development.  A certificate in full stack web development from the University of Central Florida with a deep knowledge in Java Script, HTML, CSS, MySQL, MongoDb, IndexDb, PWA, Node.js, REACT, Bootstrap and Bulma Framework. Enjoy problem-solving and puzzles. I believe teamwork and collaboration will tend to greater results. In my Boot Camp I have been entrusted to take the lead as a project manager for all my group projects due to my leadership skills from my previous career and my knowledge referencing the material covered. Highly trained to produce results in stressful situations and take necessary action required to complete tasks. Always looking to expand my knowledge in the field. Excited to apply my interpersonal skills and coding skills to maintain and build new technologies. Nothing compares to the satisfaction of watching my web application being applied in Users’ daily life.</p>
                            </div>
                        </div>
                        <iframe src="https://api.badgr.io/public/assertions/0hejCPvFSkutwVKsPV1PSQ?embedVersion=1&amp;embedWidth=330&amp;embedHeight=186&amp;identity__email=wadih.ojeil%40gmail.com" title="Badge: UCF Coding Boot Camp (Full-Stack Web Development)[Face to Face]"></iframe>

                    </div>

             </div>



    )
}

export default About