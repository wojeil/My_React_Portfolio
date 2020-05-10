import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";


function ContactPage() {

    return (
        <>
            <Nav>
            </Nav>

            <div className="container" >
                {/* <!--row 1 has one column--> */}
                <div className="row">
                    {/* <!--column contains header--> */}
                    <div className="col-md-12">
                        <h1> Contact </h1>
                        <hr/>
                    </div>
                </div>
                    {/* <!--row 2 has one column contains form inside it--> */}
                    <div className="row">
                        {/* <!--column that contains form--> */}
                        <div className="col-md-12">
                            <form id="fullForm">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Name:</label>
                                    <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="John Smith"/>
                                </div>

                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Email Address:</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                </div>

                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Message:</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="..." rows="3"></textarea>
                                </div>
                                    <input className="btn " type="submit" value="Submit"/>
                            </form>
                        </div>
                    </div>
                </div>
                            <Footer></Footer>
        </>
    );

}

export default ContactPage;