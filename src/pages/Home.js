import React from "react";
import "./HomeP.css";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
// import "../components/Design";
// import Design from "../components/Design";


function Home() {
    return (
        // <Design>
        <>
            {/* // <!-- first page section --> */}

            <section className="section" id="section-1">
                <nav className="navbar navbar-light">
                    <span className="navbar-brand  h1 ">
                        <p className="name">Wadih Ojeil</p>
                    </span>
                    {/* <!--Nav Items have been linked--> */}
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#main">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>

                    </ul>
                </nav>
            </section>

            {/* <!-- end of first page section --> */}


            {/* <!-- second page section --> */}
            <section className="section" id="section-2">
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

                            <img src="" alt="My Pic" className="img-thumbnail" />
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
            </section>
            {/* <!-- end of second page section --> */}

            {/* <!-- third page section --> */}
            <section className="section" id="section-3">
                <div className="container" id="port-cont">
                    {/* <!--Row 1 has 1 col--> */}
                    <div className="row">
                        <div className="col-md-12">
                            <h1 id="portfolio"> Portfolio </h1>
                            <h3>Page 1</h3>
                            <hr />
                        </div>
                    </div>
                    {/* <!--Row 2 has 2 col--> */}
                    <div className="row">
                        {/* <!--col 1 contains 1 card--> */}
                        <div className="col-md-6">
                            <Cards>

                            </Cards>
                        </div>
                        {/* <!--col 2 contains 1 card--> */}
                        <div className="col-md-6">
                            <Cards>
                            </Cards>
                        </div>
                    </div>
                    {/* <!--row 3 has 2 col--> */}
                    <div className="row">
                        {/* <!--col 1 contains 1 card--> */}
                        <div className="col-md-6">
                            <Cards></Cards>
                        </div>
                        {/* <!--col 2 contains 1 card--> */}
                        <div className="col-md-6">
                            <Cards></Cards>
                        </div>
                    </div>
                    {/* <!--row 4 has 2 col--> */}
                    <div className="row">
                        {/* <!--col 1 contains 1 card--> */}
                    </div>
                </div>

            </section>
            {/* <!-- end of third page section --> */}
            <section className="section" id="section-4">
                <div className="container">
                    {/* <!--Row 1 has 1 col--> */}
                    <div className="row">
                        <div className="col-md-12">
                            <h1> Portfolio </h1>
                            <h3>Page 2</h3>
                            <hr />
                        </div>
                    </div>
                    {/* <!--Row 2 has 2 col--> */}
                    <div className="row">
                        {/* <!--col 1 contains 1 card--> */}
                        <div className="col-md-6">
                            <Cards></Cards>

                        </div>
                        {/* <!--col 2 contains 1 card--> */}
                        <div className="col-md-6">
                            <Cards></Cards>
                        </div>
                    </div>
                    {/* <!--row 3 has 2 col--> */}
                    <div class="row">
                        {/* <!--col 1 contains 1 card--> */}
                        <div class="col-md-6">
                            <Cards></Cards>
                        </div>
                        {/* <!--col 2 contains 1 card--> */}
                        <div class="col-md-6">
                            <Cards></Cards>
                        </div>
                    </div>
                    {/* <!--row 4 has 2 col--> */}
                    <div class="row">

                    </div>
                </div>
        </section>
                {/* <!-- end of fourth page section --> */}


                {/* <!--forth page section--> */}

                <Footer ></Footer>
        </>
        // </Design>
    );

}

export default Home