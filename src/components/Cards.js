import React from "react";

function Cards() {

    return (
    <div className ="card-deck">
        
        <div className="card">
            <a href="https://github.com/wojeil/Project_2" target="_blank" rel="noopener noreferrer"> <img
                src="public/assets/images/2020-04-26 (1).png" className="card-img-top"
                alt=" infODose application" /> </a>
            <div className="card-body">
                <p className="card-text">Above, is a captured image of my infODose application. Click on the
                image to see all the details referencing this application.</p>
            </div>
        </div>
    </div>
    );
}

export default Cards