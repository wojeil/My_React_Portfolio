import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import './ContactP.css';

function ContactPage() {

    return (
        <div className="contactBack">
            <Nav/>
            

            <div className="container" >
                {/* <!--row 1 has one column--> */}
                <div className="row">
                    {/* <!--column contains header--> */}
                    <div className="col-md-12">
                        <h1> Contact Me </h1>
                        <hr/>
                    </div>
                </div>
                    {/* <!--row 2 has one column contains form inside it--> */}
                    <div className="row">
                        {/* <!--column that contains form--> */}
                        <div className="col-md-12">
                            <div id="fullForm">
                                <h3 className="atag">Name: Wadih Ojeil</h3>
                                <h3 className="atag">Email: wadih.ojeil@gmail.com</h3>
                                <h3 className="atag">Phone Number: +1(407)463-6548</h3>
                                <h3 className="atag">GitHub:<a className="atag" href="https://github.com/wojeil" target="_blank" rel="noopener noreferrer"> https://github.com/wojeil</a></h3>
                                <h3 className="atag">LinkedIn: <a className="atag" href="https://www.linkedin.com/in/wadih-ojeil/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/wadih-ojeil/</a> </h3>
                                
                            </div>
                        </div>
                    </div>
                </div>
                            <Footer/>
        </div>
    );

}

export default ContactPage;