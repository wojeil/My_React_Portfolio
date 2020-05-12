import React from "react";
import "./HomeP.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";





function Home() {
    return (
        // <Design>
        <>
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
                            <p className="about-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti natus,
                            reiciendis porro a
                            eligendi laborum repellendus et corrupti debitis asperiores iure corporis, voluptas sint
                            earum
                            nihil cupiditate minima, quos veniam! Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Dicta, quia architecto expedita repellendus alias voluptates sed voluptatem
                            perspiciatis! Magnam omnis tenetur eligendi culpa distinctio blanditiis, minima esse
                    obcaecati iure unde!</p>
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

        </>
        // </Design>
    );

}

export default Home