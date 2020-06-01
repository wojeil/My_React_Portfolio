import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import './ContactP.css';
import MyResume from "../images/My_Resume_2020.pdf"

function ContactPage() {

    return (
        <>
            <div className="contactBack">
                <Nav />
            </div>


            <div className="container-fluid" id="contactbackground" >
            <div className="row">
                            {/* <!--column contains header--> */}
                            <div className="col-md-9">
                                <h1 id="contact"> Contact Me </h1>
                                <hr />
                            </div>
                        </div>

                <div className="row">
                    <div className="col-sm-2"> 
                    <div className="leftside">
                        </div> 
                    </div>
                    <div className="col-sm-8">
                     
                        <div className="row">
                            {/* <!--column that contains form--> */}
                            <div className="col-sm-4">
                               
                            </div>
                            <div className="col-sm-5">
                            <div id="fullForm">
                                    <div id="top"></div>
                                    <div className="wrapper"><br/>
                                        <h3 className="atag" >Name: Wadih Ojeil</h3><br/>
                                        <h3 className="atag">Email:<a className="atag" href= "mailto: wadih.ojeil@gmail.com"> wadih.ojeil@gmail.com</a></h3><br/>
                                        <h3 className="atag">Phone Number: +1(407)463-6548</h3><br/>
                                        <h3 className="atag">GitHub:<a className="atag" href="https://github.com/wojeil" target="_blank" rel="noopener noreferrer"> https://github.com/wojeil <i className="fab fa-github"></i></a></h3><br/>
                                        <h3 className="atag" id="bottom">LinkedIn: <a className="atag" href="https://www.linkedin.com/in/wadih-ojeil/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/wadih-ojeil/ <i className="fab fa-linkedin"></i></a> </h3><br/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                            <img className="rightside" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuVntuz1NcJ5fSAFKILLO_JO9QkUc2Ea1THTsHrezsnD9TOSMh&usqp=CAU" alt="contact me" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="row">
                            <div className="col-sm-12">
                            <h3>Check Out My Resume</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <p className="clickMe">(Click on the image below to view in pdf )</p>
                            <a href={MyResume} target="_blank" rel="noopener noreferrer"> <img className="resume" src="https://careertuners.com/blog/wp-content/uploads/2019/02/one.jpg" alt="resume"/> </a>
                            </div>
                        </div>
                            

                    
                    </div>
                </div>






                {/* <!--row 1 has one column--> */}

                {/* <!--row 2 has one column contains form inside it--> */}
                <Footer />
            </div>
         
        </>
    );

}

export default ContactPage;