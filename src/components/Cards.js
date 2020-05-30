import React from "react";
import "./cards.css"
import PropTypes from 'prop-types';


function Cards({property}) {
 const {name, image, gitHref, href, ptag, index} = property
    return (


        <div id={`card-${index}`} className="card">
            <img
                src={image} className="card-img-top"
                alt={name} /> 
            <div className="card-body">
                <h5 className="card-title cardTitle">{name}</h5>
                <p className="card-text">{ptag}</p>
                <button className="btn butnCard"  > <a className="atagCard"  href={gitHref} target="_blank" rel="noopener noreferrer" > GitHub Repo </a> </button>
                <button className="btn butnCard"> <a  className="atagCard"  href={href} target="_blank" rel="noopener noreferrer">Live Demo</a></button>
            </div>
        </div>
    );
}

Cards.propTypes = {
    property: PropTypes.object.isRequired
}

export default Cards