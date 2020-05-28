import React from "react";
import "./cards.css"
import PropTypes from 'prop-types';


function Cards({property}) {
 const {name, image, gitHref, href, ptag} = property
    return (


        <div className="card">
            <a href={href} target="_blank" rel="noopener noreferrer"> <img
                src={image} className="card-img-top"
                alt={name} /> </a>
            <div className="card-body">
                <a className="cardTitle" href={gitHref} target="_blank" rel="noopener noreferrer" > <h5 className="card-title">{name}</h5> </a>
                <p className="card-text">{ptag}</p>
            </div>
        </div>
    );
}

Cards.propTypes = {
    property: PropTypes.object.isRequired
}

export default Cards